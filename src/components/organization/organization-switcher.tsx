"use client"

import {
    ChevronsUpDown,
    LogInIcon,
    PlusCircleIcon,
    SettingsIcon
} from "lucide-react"
import {
    type ComponentProps,
    type ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react"

import { AuthUIContext } from "../../lib/auth-ui-provider"
import { getLocalizedError } from "../../lib/utils"
import { cn } from "../../lib/utils"
import type { AuthLocalization } from "../../localization/auth-localization"
import type { User } from "../../types/auth-client"
import type { Button as DefaultButton } from "../ui/button"
import { UserAvatar, type UserAvatarClassNames } from "../user-avatar"
import type { UserViewClassNames } from "../user-view"
import { CreateOrganizationDialog } from "./create-organization-dialog"
import { OrganizationLogo } from "./organization-logo"
import {
    OrganizationView,
    type OrganizationViewClassNames
} from "./organization-view"
import { PersonalAccountView } from "./personal-account-view"

export interface OrganizationSwitcherClassNames {
    base?: string
    skeleton?: string
    trigger?: {
        base?: string
        avatar?: UserAvatarClassNames
        user?: UserViewClassNames
        organization?: OrganizationViewClassNames
        skeleton?: string
    }
    content?: {
        base?: string
        user?: UserViewClassNames
        organization?: OrganizationViewClassNames
        avatar?: UserAvatarClassNames
        menuItem?: string
        separator?: string
    }
}

export interface OrganizationSwitcherProps
    extends Omit<ComponentProps<typeof DefaultButton>, "trigger"> {
    classNames?: OrganizationSwitcherClassNames
    align?: "center" | "start" | "end"
    trigger?: ReactNode
    localization?: AuthLocalization
    onSetActive?: (organizationId: string | null) => void
    /**
     * Hide the personal organization option from the switcher.
     * When true, users can only switch between organizations and cannot access their personal account.
     * If no organization is active, the first available organization will be automatically selected.
     * @default false
     */
    hidePersonal?: boolean
}

/**
 * Displays an interactive user button with dropdown menu functionality
 *
 * Renders a user interface element that can be displayed as either an icon or full button:
 * - Shows a user avatar or placeholder when in icon mode
 * - Displays user name and email with dropdown indicator in full mode
 * - Provides dropdown menu with authentication options (sign in/out, settings, etc.)
 * - Supports multi-session functionality for switching between accounts
 * - Can be customized with additional links and styling options
 */
export function OrganizationSwitcher({
    className,
    classNames,
    align,
    trigger,
    localization: localizationProp,
    size,
    onSetActive,
    hidePersonal,
    ...props
}: OrganizationSwitcherProps) {
    const {
        authClient,
        basePath,
        components: {
            Button,
            DropdownMenu,
            DropdownMenuContent,
            DropdownMenuItem,
            DropdownMenuSeparator,
            DropdownMenuTrigger
        },
        hooks: { useActiveOrganization, useSession, useListOrganizations },
        localization: contextLocalization,
        settings,
        toast,
        viewPaths,
        Link
    } = useContext(AuthUIContext)

    const localization = useMemo(
        () => ({ ...contextLocalization, ...localizationProp }),
        [contextLocalization, localizationProp]
    )

    const [activeOrganizationPending, setActiveOrganizationPending] =
        useState(false)
    const [isCreateOrgDialogOpen, setIsCreateOrgDialogOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const { data: sessionData, isPending: sessionPending } = useSession()
    const user = sessionData?.user

    const { data: organizations } = useListOrganizations()
    const {
        data: activeOrganization,
        isPending: organizationPending,
        refetch: refetchActiveOrganization,
        isRefetching
    } = useActiveOrganization()

    const isPending =
        sessionPending || activeOrganizationPending || organizationPending

    // biome-ignore lint/correctness/useExhaustiveDependencies:
    useEffect(() => {
        if (isRefetching) return

        setActiveOrganizationPending(false)
    }, [activeOrganization, isRefetching])

    const switchOrganization = useCallback(
        async (organizationId: string | null) => {
            // Prevent switching to personal account when hidePersonal is true
            if (hidePersonal && organizationId === null) {
                return
            }

            setActiveOrganizationPending(true)

            try {
                onSetActive?.(organizationId)
                await authClient.organization.setActive({
                    organizationId: organizationId,
                    fetchOptions: {
                        throw: true
                    }
                })
                await refetchActiveOrganization?.()
            } catch (error) {
                toast({
                    variant: "error",
                    message: getLocalizedError({ error, localization })
                })

                setActiveOrganizationPending(false)
            }
        },
        [
            authClient,
            toast,
            localization,
            onSetActive,
            refetchActiveOrganization,
            hidePersonal
        ]
    )

    // Determine whether to show personal view based on hidePersonal prop
    const shouldShowPersonal =
        !hidePersonal && !activeOrganization && !activeOrganizationPending

    // Auto-select first organization when hidePersonal is true
    useEffect(() => {
        if (
            hidePersonal &&
            !activeOrganization &&
            !activeOrganizationPending &&
            organizations &&
            organizations.length > 0 &&
            !sessionPending &&
            !organizationPending
        ) {
            switchOrganization(organizations[0].id)
        }
    }, [
        hidePersonal,
        activeOrganization,
        activeOrganizationPending,
        organizations,
        sessionPending,
        organizationPending,
        switchOrganization
    ])

    return (
        <>
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                    {trigger ||
                        (size === "icon" ? (
                            <Button
                                size="icon"
                                className={cn(
                                    "size-fit rounded-full",
                                    className,
                                    classNames?.trigger?.base
                                )}
                                variant="ghost"
                                type="button"
                                {...props}
                            >
                                {(!sessionData && !isPending) ||
                                activeOrganizationPending ||
                                activeOrganization ||
                                (user as User)?.isAnonymous ||
                                hidePersonal ? (
                                    <OrganizationLogo
                                        key={activeOrganization?.logo}
                                        className={cn(
                                            className,
                                            classNames?.base
                                        )}
                                        classNames={classNames?.trigger?.avatar}
                                        isPending={
                                            isPending ||
                                            activeOrganizationPending
                                        }
                                        organization={activeOrganization}
                                        aria-label={localization.ORGANIZATION}
                                        localization={localization}
                                    />
                                ) : (
                                    <UserAvatar
                                        key={user?.image}
                                        className={cn(
                                            className,
                                            classNames?.base
                                        )}
                                        classNames={classNames?.trigger?.avatar}
                                        isPending={isPending}
                                        user={user}
                                        aria-label={localization.ACCOUNT}
                                        localization={localization}
                                    />
                                )}
                            </Button>
                        ) : (
                            <Button
                                className={cn(
                                    "!p-2",
                                    className,
                                    classNames?.trigger?.base
                                )}
                                size={size}
                                {...props}
                            >
                                {(!sessionData && !isPending) ||
                                activeOrganizationPending ||
                                activeOrganization ||
                                (user as User)?.isAnonymous ||
                                hidePersonal ? (
                                    <OrganizationView
                                        classNames={
                                            classNames?.trigger?.organization
                                        }
                                        isPending={
                                            isPending ||
                                            activeOrganizationPending
                                        }
                                        localization={localization}
                                        organization={activeOrganization}
                                        size={size}
                                    />
                                ) : (
                                    <PersonalAccountView
                                        classNames={classNames?.trigger?.user}
                                        isPending={isPending}
                                        localization={localization}
                                        size={size}
                                        user={user}
                                    />
                                )}

                                <ChevronsUpDown className="ml-auto" />
                            </Button>
                        ))}
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className={cn(
                        "w-[--radix-dropdown-menu-trigger-width] min-w-56 max-w-64",
                        classNames?.content?.base
                    )}
                    align={align}
                    onCloseAutoFocus={(e) => e.preventDefault()}
                >
                    <div
                        className={cn(
                            "flex items-center justify-between gap-2 p-2",
                            classNames?.content?.menuItem
                        )}
                    >
                        {(user && !(user as User).isAnonymous) || isPending ? (
                            <>
                                {activeOrganizationPending ||
                                activeOrganization ||
                                hidePersonal ? (
                                    <OrganizationView
                                        classNames={
                                            classNames?.content?.organization
                                        }
                                        isPending={
                                            isPending ||
                                            activeOrganizationPending
                                        }
                                        organization={activeOrganization}
                                        localization={localization}
                                    />
                                ) : (
                                    <PersonalAccountView
                                        classNames={classNames?.content?.user}
                                        isPending={isPending}
                                        localization={localization}
                                        user={user}
                                    />
                                )}

                                {!isPending && (
                                    <Link
                                        href={`${settings?.basePath || basePath}/${
                                            activeOrganization
                                                ? viewPaths.ORGANIZATION
                                                : viewPaths.SETTINGS
                                        }`}
                                    >
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="!size-8 ml-auto"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            <SettingsIcon className="size-4" />
                                        </Button>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <div className="-my-1 text-muted-foreground text-xs">
                                {localization.ORGANIZATION}
                            </div>
                        )}
                    </div>

                    <DropdownMenuSeparator
                        className={classNames?.content?.separator}
                    />

                    {activeOrganization && !hidePersonal && (
                        <DropdownMenuItem
                            onClick={() => switchOrganization(null)}
                        >
                            <PersonalAccountView
                                classNames={classNames?.content?.user}
                                isPending={isPending}
                                localization={localization}
                                user={user}
                            />
                        </DropdownMenuItem>
                    )}

                    {organizations?.map(
                        (organization) =>
                            organization.id !== activeOrganization?.id && (
                                <DropdownMenuItem
                                    key={organization.id}
                                    onClick={() =>
                                        switchOrganization(organization.id)
                                    }
                                >
                                    <OrganizationView
                                        classNames={
                                            classNames?.content?.organization
                                        }
                                        isPending={isPending}
                                        localization={localization}
                                        organization={organization}
                                    />
                                </DropdownMenuItem>
                            )
                    )}

                    {organizations &&
                        organizations.length > 0 &&
                        (!hidePersonal || organizations.length > 1) && (
                            <DropdownMenuSeparator
                                className={classNames?.content?.separator}
                            />
                        )}

                    {!isPending &&
                    sessionData &&
                    !(user as User).isAnonymous ? (
                        <DropdownMenuItem
                            className={cn(classNames?.content?.menuItem)}
                            onClick={() => setIsCreateOrgDialogOpen(true)}
                        >
                            <PlusCircleIcon />
                            {localization.CREATE_ORGANIZATION}
                        </DropdownMenuItem>
                    ) : (
                        <Link href={`${basePath}/${viewPaths.SIGN_IN}`}>
                            <DropdownMenuItem
                                className={cn(classNames?.content?.menuItem)}
                            >
                                <LogInIcon />
                                {localization.SIGN_IN}
                            </DropdownMenuItem>
                        </Link>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>

            <CreateOrganizationDialog
                open={isCreateOrgDialogOpen}
                onOpenChange={setIsCreateOrgDialogOpen}
                localization={localization}
            />
        </>
    )
}
