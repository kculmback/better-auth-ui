"use client"

import { EyeIcon, EyeOffIcon } from "lucide-react"
import { type ComponentProps, useContext, useState } from "react"

import { cn } from "../lib/utils"
import type { Input as DefaultInput } from "./ui/input"
import { AuthUIContext } from "../lib/auth-ui-provider"

export function PasswordInput({
    className,
    enableToggle,
    onChange,
    ...props
}: ComponentProps<typeof DefaultInput> & { enableToggle?: boolean }) {
    const [disabled, setDisabled] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    const {
        components: { Button, Input }
    } = useContext(AuthUIContext)

    return (
        <div className="relative">
            <Input
                className={cn(enableToggle && "pr-10", className)}
                {...props}
                type={isVisible && enableToggle ? "text" : "password"}
                onChange={(event) => {
                    setDisabled(!event.target.value)
                    onChange?.(event)
                }}
            />

            {enableToggle && (
                <>
                    <Button
                        className="!bg-transparent absolute top-0 right-0"
                        disabled={disabled}
                        size="icon"
                        type="button"
                        variant="ghost"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        {isVisible ? <EyeIcon /> : <EyeOffIcon />}
                    </Button>

                    <style>{`
                        .hide-password-toggle::-ms-reveal,
                        .hide-password-toggle::-ms-clear {
                            visibility: hidden;
                            pointer-events: none;
                            display: none;
                        }
                    `}</style>
                </>
            )}
        </div>
    )
}
