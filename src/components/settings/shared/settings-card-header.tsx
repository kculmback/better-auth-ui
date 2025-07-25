"use client"

import { useContext, type ReactNode } from "react"

import { cn } from "../../../lib/utils"
import type { SettingsCardClassNames } from "./settings-card"
import { AuthUIContext } from "../../../lib/auth-ui-provider"

export interface SettingsCardHeaderProps {
    className?: string
    classNames?: SettingsCardClassNames
    description?: ReactNode
    isPending?: boolean
    title: ReactNode
}

export function SettingsCardHeader({
    className,
    classNames,
    description,
    isPending,
    title
}: SettingsCardHeaderProps) {
    const {
        components: { CardDescription, CardHeader, CardTitle, Skeleton }
    } = useContext(AuthUIContext)

    return (
        <CardHeader className={cn(classNames?.header, className)}>
            {isPending ? (
                <>
                    <Skeleton
                        className={cn(
                            "my-0.5 h-5 w-1/3 md:h-5.5",
                            classNames?.skeleton
                        )}
                    />

                    {description && (
                        <Skeleton
                            className={cn(
                                "mt-1.5 mb-0.5 h-3 w-2/3 md:h-3.5",
                                classNames?.skeleton
                            )}
                        />
                    )}
                </>
            ) : (
                <>
                    <CardTitle
                        className={cn("text-lg md:text-xl", classNames?.title)}
                    >
                        {title}
                    </CardTitle>

                    {description && (
                        <CardDescription
                            className={cn(
                                "text-xs md:text-sm",
                                classNames?.description
                            )}
                        >
                            {description}
                        </CardDescription>
                    )}
                </>
            )}
        </CardHeader>
    )
}
