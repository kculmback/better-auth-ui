"use client"

import { useContext } from "react"
import { cn } from "../../../lib/utils"
import type { SettingsCardClassNames } from "../shared/settings-card"
import { AuthUIContext } from "../../../lib/auth-ui-provider"

export function InputFieldSkeleton({
    classNames
}: { classNames?: SettingsCardClassNames }) {
    const {
        components: { Skeleton }
    } = useContext(AuthUIContext)

    return (
        <div className="flex flex-col gap-1.5">
            <Skeleton className={cn("h-4 w-32", classNames?.skeleton)} />
            <Skeleton className={cn("h-9 w-full", classNames?.skeleton)} />
        </div>
    )
}
