import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentProps, ReactNode } from 'react';
import { a as AuthView } from './auth-view-paths-Ctk94WJ-.cjs';
export { A as AuthViewPaths, b as authViewPaths } from './auth-view-paths-Ctk94WJ-.cjs';
import { a as AuthLocalization, b as Avatar, C as Card, P as PasswordValidation, I as Input, D as Dialog, B as Button, F as FieldType } from './auth-ui-provider-CteODi-b.cjs';
export { e as AppleIcon, q as AuthUIContext, p as AuthUIContextType, r as AuthUIProvider, A as AuthUIProviderProps, n as Components, f as DiscordIcon, g as DropboxIcon, h as FacebookIcon, G as GitHubIcon, i as GitLabIcon, j as GoogleIcon, K as KickIcon, L as LinkedInIcon, M as MicrosoftIcon, t as Provider, d as ProviderIcon, c as ProviderIconProps, R as RedditIcon, k as RobloxIcon, S as SpotifyIcon, T as TikTokIcon, l as TwitchIcon, V as VKIcon, X as XIcon, Z as ZoomIcon, o as authLocalization, m as defaultComponents, s as socialProviders } from './auth-ui-provider-CteODi-b.cjs';
export { EmailTemplate, EmailTemplateClassNames, EmailTemplateProps } from './server.cjs';
import { Organization } from 'better-auth/plugins/organization';
import { R as Refetch, b as AnyAuthClient } from './auth-hooks-DL8c3_Dy.cjs';
export { A as AuthHooks } from './auth-hooks-DL8c3_Dy.cjs';
import * as _better_fetch_fetch from '@better-fetch/fetch';
export { A as AuthMutators } from './auth-mutators-CK8vxOJz.cjs';
import 'better-auth/social-providers';
import 'react-hook-form';
import 'class-variance-authority/types';
import 'class-variance-authority';
import '@radix-ui/react-avatar';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-dialog';
import 'vaul';
import '@radix-ui/react-dropdown-menu';
import '@radix-ui/react-label';
import '@radix-ui/react-slot';
import 'input-otp';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '@radix-ui/react-tabs';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'better-auth';
import 'better-auth/plugins/passkey';

declare function AuthCallback({ redirectTo }: {
    redirectTo?: string;
}): react_jsx_runtime.JSX.Element;

type Profile = {
    id?: string | number;
    email?: string | null;
    name?: string | null;
    displayUsername?: string | null;
    username?: string | null;
    displayName?: string | null;
    firstName?: string | null;
    fullName?: string | null;
    isAnonymous?: boolean | null;
    emailVerified?: boolean | null;
    image?: string | null;
    avatar?: string | null;
    avatarUrl?: string | null;
};

interface UserAvatarClassNames {
    base?: string;
    image?: string;
    fallback?: string;
    fallbackIcon?: string;
    skeleton?: string;
}
interface UserAvatarProps {
    classNames?: UserAvatarClassNames;
    isPending?: boolean;
    size?: "sm" | "default" | "lg" | "xl" | null;
    user?: Profile | null;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: Partial<AuthLocalization>;
}
/**
 * Displays a user avatar with image and fallback support
 *
 * Renders a user's avatar image when available, with appropriate fallbacks:
 * - Shows a skeleton when isPending is true
 * - Displays first two characters of user's name when no image is available
 * - Falls back to a generic user icon when neither image nor name is available
 */
declare function UserAvatar({ className, classNames, isPending, size, user, localization: propLocalization, ...props }: UserAvatarProps & ComponentProps<typeof Avatar>): react_jsx_runtime.JSX.Element;

type SettingsCardClassNames = {
    base?: string;
    avatar?: UserAvatarClassNames;
    button?: string;
    cell?: string;
    checkbox?: string;
    destructiveButton?: string;
    content?: string;
    description?: string;
    dialog?: {
        content?: string;
        footer?: string;
        header?: string;
    };
    error?: string;
    footer?: string;
    header?: string;
    icon?: string;
    input?: string;
    instructions?: string;
    label?: string;
    primaryButton?: string;
    secondaryButton?: string;
    outlineButton?: string;
    skeleton?: string;
    title?: string;
};
interface SettingsCardProps extends Omit<ComponentProps<typeof Card>, "title"> {
    children?: ReactNode;
    className?: string;
    classNames?: SettingsCardClassNames;
    title?: ReactNode;
    description?: ReactNode;
    instructions?: ReactNode;
    actionLabel?: ReactNode;
    isSubmitting?: boolean;
    disabled?: boolean;
    isPending?: boolean;
    optimistic?: boolean;
    variant?: "default" | "destructive";
    localization?: AuthLocalization;
    action?: () => Promise<unknown> | unknown;
}
declare function SettingsCard({ children, className, classNames, title, description, instructions, actionLabel, disabled, isPending, isSubmitting, optimistic, variant, action, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

type SettingsCardsClassNames = {
    base?: string;
    card?: SettingsCardClassNames;
    cards?: string;
    icon?: string;
    drawer?: {
        base?: string;
        trigger?: string;
        content?: string;
        menuIcon?: string;
        menuItem?: string;
    };
    sidebar?: {
        base?: string;
        button?: string;
        buttonActive?: string;
    };
};
declare const settingsViews: readonly ["SETTINGS", "SECURITY", "API_KEYS", "ORGANIZATION", "ORGANIZATIONS", "MEMBERS"];
type SettingsView = (typeof settingsViews)[number];
interface SettingsCardsProps {
    className?: string;
    classNames?: SettingsCardsClassNames;
    localization?: AuthLocalization;
    pathname?: string;
    view?: SettingsView;
}
declare function SettingsCards({ className, classNames, localization, pathname, view }: SettingsCardsProps): react_jsx_runtime.JSX.Element;

type AuthFormClassNames = {
    base?: string;
    button?: string;
    checkbox?: string;
    description?: string;
    error?: string;
    forgotPasswordLink?: string;
    icon?: string;
    input?: string;
    label?: string;
    otpInput?: string;
    otpInputContainer?: string;
    outlineButton?: string;
    primaryButton?: string;
    providerButton?: string;
    qrCode?: string;
    secondaryButton?: string;
};
interface AuthFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    callbackURL?: string;
    isSubmitting?: boolean;
    localization?: Partial<AuthLocalization>;
    pathname?: string;
    redirectTo?: string;
    view?: AuthView;
    otpSeparators?: 0 | 1 | 2;
    setIsSubmitting?: (isSubmitting: boolean) => void;
}
declare function AuthForm({ className, classNames, callbackURL, isSubmitting, localization, pathname, redirectTo, view, otpSeparators, setIsSubmitting }: AuthFormProps): false | react_jsx_runtime.JSX.Element | null | undefined;

interface AuthCardClassNames {
    base?: string;
    content?: string;
    description?: string;
    footer?: string;
    footerLink?: string;
    continueWith?: string;
    form?: AuthFormClassNames;
    header?: string;
    separator?: string;
    settings?: SettingsCardsClassNames;
    title?: string;
}
interface AuthCardProps {
    className?: string;
    classNames?: AuthCardClassNames;
    callbackURL?: string;
    cardHeader?: ReactNode;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
    pathname?: string;
    redirectTo?: string;
    /**
     * @default "auto"
     */
    socialLayout?: "auto" | "horizontal" | "grid" | "vertical";
    /**
     * @remarks `AuthView`
     */
    view?: AuthView;
    /**
     * @default 0
     */
    otpSeparators?: 0 | 1 | 2;
}
declare function AuthCard({ className, classNames, callbackURL, cardHeader, localization, pathname, redirectTo, socialLayout, view, otpSeparators }: AuthCardProps): react_jsx_runtime.JSX.Element;

interface ForgotPasswordFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    setIsSubmitting?: (value: boolean) => void;
}
declare function ForgotPasswordForm({ className, classNames, isSubmitting, localization, setIsSubmitting }: ForgotPasswordFormProps): react_jsx_runtime.JSX.Element;

interface MagicLinkFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    callbackURL?: string;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
}
declare function MagicLinkForm({ className, classNames, callbackURL: callbackURLProp, isSubmitting, localization, redirectTo: redirectToProp, setIsSubmitting }: MagicLinkFormProps): react_jsx_runtime.JSX.Element;

interface RecoverAccountFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
}
declare function RecoverAccountForm({ className, classNames, isSubmitting, localization, redirectTo, setIsSubmitting }: RecoverAccountFormProps): react_jsx_runtime.JSX.Element;

interface ResetPasswordFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    localization: Partial<AuthLocalization>;
    passwordValidation?: PasswordValidation;
}
declare function ResetPasswordForm({ className, classNames, localization, passwordValidation }: ResetPasswordFormProps): react_jsx_runtime.JSX.Element;

interface SignInFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (isSubmitting: boolean) => void;
    passwordValidation?: PasswordValidation;
}
declare function SignInForm({ className, classNames, isSubmitting, localization, redirectTo, setIsSubmitting, passwordValidation }: SignInFormProps): react_jsx_runtime.JSX.Element;

interface SignUpFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    callbackURL?: string;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
    passwordValidation?: PasswordValidation;
}
declare function SignUpForm({ className, classNames, callbackURL, isSubmitting, localization, redirectTo, setIsSubmitting, passwordValidation }: SignUpFormProps): react_jsx_runtime.JSX.Element;

interface TwoFactorFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization?: Partial<AuthLocalization>;
    otpSeparators?: 0 | 1 | 2;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
}
declare function TwoFactorForm({ className, classNames, isSubmitting, localization, otpSeparators, redirectTo, setIsSubmitting }: TwoFactorFormProps): react_jsx_runtime.JSX.Element;

declare function SignOut(): react_jsx_runtime.JSX.Element;

/**
 * Conditionally renders content during authentication loading state
 *
 * Renders its children only when the authentication state is being determined
 * (during the loading/pending phase). Once the authentication state is resolved,
 * nothing is rendered. Useful for displaying loading indicators or temporary
 * content while waiting for the authentication check to complete.
 */
declare function AuthLoading({ children }: {
    children: ReactNode;
}): ReactNode;

declare function PasswordInput({ className, enableToggle, onChange, ...props }: ComponentProps<typeof Input> & {
    enableToggle?: boolean;
}): react_jsx_runtime.JSX.Element;

interface AcceptInvitationCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: Partial<AuthLocalization>;
}
declare function AcceptInvitationCard({ className, classNames, localization: localizationProp }: AcceptInvitationCardProps): react_jsx_runtime.JSX.Element;

interface CreateOrganizationDialogProps extends ComponentProps<typeof Dialog> {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: AuthLocalization;
}
declare function CreateOrganizationDialog({ className, classNames, localization: localizationProp, onOpenChange, ...props }: CreateOrganizationDialogProps): react_jsx_runtime.JSX.Element;

declare function DeleteOrganizationCard({ className, classNames, localization }: SettingsCardProps): react_jsx_runtime.JSX.Element | null;

declare function OrganizationInvitationsCard({ className, classNames, localization: localizationProp, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element | null;

interface OrganizationLogoClassNames {
    base?: string;
    image?: string;
    fallback?: string;
    fallbackIcon?: string;
    skeleton?: string;
}
interface OrganizationLogoProps {
    classNames?: OrganizationLogoClassNames;
    isPending?: boolean;
    size?: "sm" | "default" | "lg" | "xl" | null;
    organization?: Partial<Organization> | null;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
}
/**
 * Displays an organization logo with image and fallback support
 *
 * Renders an organization's logo image when available, with appropriate fallbacks:
 * - Shows a skeleton when isPending is true
 * - Falls back to a building icon when no logo is available
 */
declare function OrganizationLogo({ className, classNames, isPending, size, organization, localization: propLocalization, ...props }: OrganizationLogoProps & ComponentProps<typeof Avatar>): react_jsx_runtime.JSX.Element;

declare function OrganizationMembersCard({ className, classNames, localization: localizationProp, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

declare function OrganizationNameCard({ className, classNames, localization: localizationProp, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

type OrganizationSettingsCardsProps = Omit<SettingsCardsProps, "view">;
declare function OrganizationSettingsCards({ className, classNames, localization }: OrganizationSettingsCardsProps): react_jsx_runtime.JSX.Element;

declare function OrganizationSlugCard({ className, classNames, localization: localizationProp, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

interface UserViewClassNames {
    base?: string;
    avatar?: UserAvatarClassNames;
    content?: string;
    title?: string;
    subtitle?: string;
    skeleton?: string;
}
interface UserViewProps {
    className?: string;
    classNames?: UserViewClassNames;
    isPending?: boolean;
    size?: "sm" | "default" | "lg" | null;
    user?: Profile | null;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
}
/**
 * Displays user information with avatar and details in a compact view
 *
 * Renders a user's profile information with appropriate fallbacks:
 * - Shows avatar alongside user name and email when available
 * - Shows loading skeletons when isPending is true
 * - Falls back to generic "User" text when neither name nor email is available
 * - Supports customization through classNames prop
 */
declare function UserView({ className, classNames, isPending, size, user, localization: propLocalization }: UserViewProps): react_jsx_runtime.JSX.Element;

interface OrganizationViewClassNames {
    base?: string;
    avatar?: OrganizationLogoClassNames;
    content?: string;
    title?: string;
    subtitle?: string;
    skeleton?: string;
}
interface OrganizationViewProps {
    className?: string;
    classNames?: OrganizationViewClassNames;
    isPending?: boolean;
    size?: "sm" | "default" | "lg" | null;
    organization?: Organization | null;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
}
/**
 * Displays organization information with logo and details in a compact view
 *
 * Renders an organization's profile information with appropriate fallbacks:
 * - Shows logo alongside organization name and slug when available
 * - Shows loading skeletons when isPending is true
 * - Falls back to generic "Organization" text when neither name nor slug is available
 * - Supports customization through classNames prop
 */
declare function OrganizationView({ className, classNames, isPending, size, organization, localization: propLocalization }: OrganizationViewProps): react_jsx_runtime.JSX.Element;

interface OrganizationSwitcherClassNames {
    base?: string;
    skeleton?: string;
    trigger?: {
        base?: string;
        avatar?: UserAvatarClassNames;
        user?: UserViewClassNames;
        organization?: OrganizationViewClassNames;
        skeleton?: string;
    };
    content?: {
        base?: string;
        user?: UserViewClassNames;
        organization?: OrganizationViewClassNames;
        avatar?: UserAvatarClassNames;
        menuItem?: string;
        separator?: string;
    };
}
interface OrganizationSwitcherProps extends Omit<ComponentProps<typeof Button>, "trigger"> {
    classNames?: OrganizationSwitcherClassNames;
    align?: "center" | "start" | "end";
    trigger?: ReactNode;
    localization?: AuthLocalization;
    onSetActive?: (organizationId: string | null) => void;
    /**
     * Hide the personal organization option from the switcher.
     * When true, users can only switch between organizations and cannot access their personal account.
     * If no organization is active, the first available organization will be automatically selected.
     * @default false
     */
    hidePersonal?: boolean;
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
declare function OrganizationSwitcher({ className, classNames, align, trigger, localization: localizationProp, size, onSetActive, hidePersonal, ...props }: OrganizationSwitcherProps): react_jsx_runtime.JSX.Element;

declare function OrganizationsCard({ className, classNames, localization, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

interface OrganizationLogoCardProps extends ComponentProps<typeof Card> {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: AuthLocalization;
}
declare function OrganizationLogoCard({ className, classNames, localization, ...props }: OrganizationLogoCardProps): react_jsx_runtime.JSX.Element;

/**
 * Redirects the user to the sign-in page
 *
 * Renders nothing and automatically redirects the current user to the authentication
 * sign-in page. Useful for protecting routes that require authentication or
 * redirecting users to sign in from various parts of the application.
 */
declare function RedirectToSignIn(): ReactNode;

/**
 * Redirects the user to the sign-up page
 *
 * Renders nothing and automatically redirects the current user to the authentication
 * sign-up page. Useful for directing new users to create an account or
 * for redirecting from marketing pages to the registration flow.
 */
declare function RedirectToSignUp(): ReactNode;

declare function AccountSettingsCards({ className, classNames, localization }: Omit<SettingsCardsProps, "view">): react_jsx_runtime.JSX.Element;

interface AccountsCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: Partial<AuthLocalization>;
}
declare function AccountsCard({ className, classNames, localization }: AccountsCardProps): react_jsx_runtime.JSX.Element;

declare function APIKeysCard({ className, classNames, localization, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

declare function ChangeEmailCard({ className, classNames, localization, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

interface ChangePasswordCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    accounts?: {
        provider: string;
    }[] | null;
    isPending?: boolean;
    localization?: AuthLocalization;
    skipHook?: boolean;
    passwordValidation?: PasswordValidation;
}
declare function ChangePasswordCard({ className, classNames, accounts, isPending, localization, skipHook, passwordValidation }: ChangePasswordCardProps): react_jsx_runtime.JSX.Element;

interface DeleteAccountCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    accounts?: {
        provider: string;
    }[] | null;
    isPending?: boolean;
    localization?: AuthLocalization;
    skipHook?: boolean;
}
declare function DeleteAccountCard({ className, classNames, accounts, isPending, localization, skipHook }: DeleteAccountCardProps): react_jsx_runtime.JSX.Element;

interface PasskeysCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: AuthLocalization;
}
declare function PasskeysCard({ className, classNames, localization }: PasskeysCardProps): react_jsx_runtime.JSX.Element;

interface ProvidersCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    accounts?: {
        accountId: string;
        provider: string;
    }[] | null;
    isPending?: boolean;
    localization?: Partial<AuthLocalization>;
    skipHook?: boolean;
    refetch?: Refetch;
}
declare function ProvidersCard({ className, classNames, accounts, isPending, localization, skipHook, refetch }: ProvidersCardProps): react_jsx_runtime.JSX.Element;

declare function SecuritySettingsCards({ className, classNames, localization }: Omit<SettingsCardsProps, "view">): react_jsx_runtime.JSX.Element;

interface SessionsCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: Partial<AuthLocalization>;
}
declare function SessionsCard({ className, classNames, localization }: SessionsCardProps): react_jsx_runtime.JSX.Element;

interface TwoFactorCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: AuthLocalization;
}
declare function TwoFactorCard({ className, classNames, localization }: TwoFactorCardProps): react_jsx_runtime.JSX.Element;

interface UpdateAvatarCardProps extends ComponentProps<typeof Card> {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: AuthLocalization;
}
declare function UpdateAvatarCard({ className, classNames, localization, ...props }: UpdateAvatarCardProps): react_jsx_runtime.JSX.Element;

interface UpdateFieldCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    description?: ReactNode;
    instructions?: ReactNode;
    localization?: Partial<AuthLocalization>;
    name: string;
    placeholder?: string;
    required?: boolean;
    label?: ReactNode;
    type?: FieldType;
    value?: unknown;
    validate?: (value: string) => boolean | Promise<boolean>;
}
declare function UpdateFieldCard({ className, classNames, description, instructions, localization, name, placeholder, required, label, type, value, validate }: UpdateFieldCardProps): react_jsx_runtime.JSX.Element;

declare function UpdateNameCard({ className, classNames, localization, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

declare function UpdateUsernameCard({ className, classNames, localization, ...props }: SettingsCardProps): react_jsx_runtime.JSX.Element;

/**
 * Conditionally renders content for authenticated users only
 *
 * Renders its children only when a user is authenticated with a valid session.
 * If no session exists, nothing is rendered. Useful for displaying protected
 * content or UI elements that should only be visible to signed-in users.
 */
declare function SignedIn({ children }: {
    children: ReactNode;
}): ReactNode;

/**
 * Conditionally renders content for unauthenticated users only
 *
 * Renders its children only when no user is authenticated and the authentication
 * state is not pending. If a session exists or is being loaded, nothing is rendered.
 * Useful for displaying sign-in prompts or content exclusive to guests.
 */
declare function SignedOut({ children }: {
    children: ReactNode;
}): ReactNode;

interface UserButtonClassNames {
    base?: string;
    skeleton?: string;
    trigger?: {
        base?: string;
        avatar?: UserAvatarClassNames;
        user?: UserViewClassNames;
        skeleton?: string;
    };
    content?: {
        base?: string;
        user?: UserViewClassNames;
        avatar?: UserAvatarClassNames;
        menuItem?: string;
        separator?: string;
    };
}
interface UserButtonProps {
    className?: string;
    classNames?: UserButtonClassNames;
    align?: "center" | "start" | "end";
    additionalLinks?: {
        href: string;
        icon?: ReactNode;
        label: ReactNode;
        signedIn?: boolean;
    }[];
    trigger?: ReactNode;
    disableDefaultLinks?: boolean;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
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
declare function UserButton({ className, classNames, align, trigger, additionalLinks, disableDefaultLinks, localization: propLocalization, size, ...props }: UserButtonProps & ComponentProps<typeof Button>): react_jsx_runtime.JSX.Element;

interface AuthenticateOptions<TAuthClient extends AnyAuthClient> {
    authClient?: TAuthClient;
    authView?: AuthView;
    enabled?: boolean;
}
declare function useAuthenticate<TAuthClient extends AnyAuthClient>(options?: AuthenticateOptions<TAuthClient>): {
    data: {
        session: TAuthClient["$Infer"]["Session"]["session"];
        user: TAuthClient["$Infer"]["Session"]["user"];
    } | null | undefined;
    user: TAuthClient["$Infer"]["Session"]["user"] | undefined;
    isPending: boolean;
    error: _better_fetch_fetch.BetterFetchError | null;
    refetch: () => void;
};

type FetchError = {
    code?: string | undefined;
    message?: string | undefined;
    status?: number;
    statusText?: string;
};

declare function useAuthData<T>({ queryFn, cacheKey, staleTime }: {
    queryFn: () => Promise<{
        data: T | null;
        error?: FetchError | null;
    }>;
    cacheKey?: string;
    staleTime?: number;
}): {
    data: NonNullable<T> | null;
    isPending: boolean;
    isRefetching: boolean;
    error: FetchError | null;
    refetch: () => Promise<void>;
};

export { APIKeysCard, AcceptInvitationCard, type AcceptInvitationCardProps, AccountSettingsCards, AccountsCard, type AccountsCardProps, AuthCallback, AuthCard, type AuthCardClassNames, type AuthCardProps, AuthForm, type AuthFormClassNames, type AuthFormProps, AuthLoading, AuthLocalization, AuthView, ChangeEmailCard, ChangePasswordCard, type ChangePasswordCardProps, CreateOrganizationDialog, type CreateOrganizationDialogProps, DeleteAccountCard, type DeleteAccountCardProps, DeleteOrganizationCard, ForgotPasswordForm, type ForgotPasswordFormProps, MagicLinkForm, type MagicLinkFormProps, OrganizationInvitationsCard, OrganizationLogo, OrganizationLogoCard, type OrganizationLogoCardProps, type OrganizationLogoClassNames, type OrganizationLogoProps, OrganizationMembersCard, OrganizationNameCard, OrganizationSettingsCards, type OrganizationSettingsCardsProps, OrganizationSlugCard, OrganizationSwitcher, type OrganizationSwitcherClassNames, type OrganizationSwitcherProps, OrganizationView, type OrganizationViewClassNames, type OrganizationViewProps, OrganizationsCard, PasskeysCard, type PasskeysCardProps, PasswordInput, ProvidersCard, type ProvidersCardProps, RecoverAccountForm, type RecoverAccountFormProps, RedirectToSignIn, RedirectToSignUp, ResetPasswordForm, type ResetPasswordFormProps, SecuritySettingsCards, SessionsCard, type SessionsCardProps, SettingsCard, type SettingsCardClassNames, type SettingsCardProps, SettingsCards, type SettingsCardsClassNames, type SettingsCardsProps, type SettingsView, SignInForm, type SignInFormProps, SignOut, SignUpForm, type SignUpFormProps, SignedIn, SignedOut, TwoFactorCard, type TwoFactorCardProps, TwoFactorForm, type TwoFactorFormProps, UpdateAvatarCard, type UpdateAvatarCardProps, UpdateFieldCard, type UpdateFieldCardProps, UpdateNameCard, UpdateUsernameCard, UserAvatar, type UserAvatarClassNames, type UserAvatarProps, UserButton, type UserButtonClassNames, type UserButtonProps, UserView, type UserViewClassNames, type UserViewProps, settingsViews, useAuthData, useAuthenticate };
