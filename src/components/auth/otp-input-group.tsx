"use client"

import { useContext } from "react"
import { AuthUIContext } from "../../lib/auth-ui-provider"

export function OTPInputGroup({
    otpSeparators = 0
}: {
    otpSeparators?: 0 | 1 | 2
}) {
    const {
        components: { InputOTPGroup, InputOTPSeparator, InputOTPSlot }
    } = useContext(AuthUIContext)

    if (otpSeparators === 0) {
        return (
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        )
    }

    if (otpSeparators === 1) {
        return (
            <>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </>
        )
    }

    return (
        <>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
            </InputOTPGroup>

            <InputOTPSeparator />

            <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
            </InputOTPGroup>

            <InputOTPSeparator />

            <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </>
    )
}
