"use client"

import { Loader2 } from "lucide-react"
import { useContext, type ComponentProps, type ReactNode } from "react"
import { useFormState } from "react-hook-form"

import { cn } from "../../../lib/utils"
import type { Button as DefaultButton } from "../../ui/button"
import type { SettingsCardClassNames } from "./settings-card"
import { AuthUIContext } from "../../../lib/auth-ui-provider"

interface SettingsActionButtonProps
    extends ComponentProps<typeof DefaultButton> {
    classNames?: SettingsCardClassNames
    actionLabel: ReactNode
    disabled?: boolean
    isSubmitting?: boolean
}

export function SettingsActionButton({
    classNames,
    actionLabel,
    disabled,
    isSubmitting,
    variant,
    onClick,
    ...props
}: SettingsActionButtonProps) {
    const {
        components: { Button }
    } = useContext(AuthUIContext)

    if (!onClick) {
        const formState = useFormState()
        isSubmitting = formState.isSubmitting
    }

    return (
        <Button
            className={cn(
                "md:ms-auto",
                classNames?.button,
                variant === "default" && classNames?.primaryButton,
                variant === "destructive" && classNames?.destructiveButton
            )}
            disabled={isSubmitting || disabled}
            size="sm"
            type={onClick ? "button" : "submit"}
            variant={variant}
            onClick={onClick}
            {...props}
        >
            {isSubmitting && <Loader2 className="animate-spin" />}
            {actionLabel}
        </Button>
    )
}
