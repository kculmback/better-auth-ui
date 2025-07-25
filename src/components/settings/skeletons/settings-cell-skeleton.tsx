"use client"

import { useContext } from "react"
import { cn } from "../../../lib/utils"
import type { SettingsCardClassNames } from "../shared/settings-card"
import { AuthUIContext } from "../../../lib/auth-ui-provider"

export function SettingsCellSkeleton({
    classNames
}: { classNames?: SettingsCardClassNames }) {
    const {
        components: { Card, Skeleton }
    } = useContext(AuthUIContext)

    return (
        <Card
            className={cn(
                "flex-row items-center gap-3 px-4 py-3",
                classNames?.cell
            )}
        >
            <div className="flex items-center gap-2">
                <Skeleton
                    className={cn("size-5 rounded-full", classNames?.skeleton)}
                />

                <div>
                    <Skeleton
                        className={cn("h-4 w-24", classNames?.skeleton)}
                    />
                </div>
            </div>

            <Skeleton
                className={cn("ms-auto size-8 w-12", classNames?.skeleton)}
            />
        </Card>
    )
}
