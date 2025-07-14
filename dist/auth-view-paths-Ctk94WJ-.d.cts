declare const authViewPaths: {
    /** @default "accept-invitation" */
    ACCEPT_INVITATION: string;
    /** @default "api-keys" */
    API_KEYS: string;
    /** @default "callback" */
    CALLBACK: string;
    /** @default "email-otp" */
    EMAIL_OTP: string;
    /** @default "forgot-password" */
    FORGOT_PASSWORD: string;
    /** @default "magic-link" */
    MAGIC_LINK: string;
    /** @default "members" */
    MEMBERS: string;
    /** @default "organization" */
    ORGANIZATION: string;
    /** @default "organizations" */
    ORGANIZATIONS: string;
    /** @default "recover-account" */
    RECOVER_ACCOUNT: string;
    /** @default "reset-password" */
    RESET_PASSWORD: string;
    /** @default "security" */
    SECURITY: string;
    /** @default "settings" */
    SETTINGS: string;
    /** @default "sign-in" */
    SIGN_IN: string;
    /** @default "sign-out" */
    SIGN_OUT: string;
    /** @default "sign-up" */
    SIGN_UP: string;
    /** @default "two-factor" */
    TWO_FACTOR: string;
};
type AuthViewPaths = typeof authViewPaths;
type AuthView = keyof AuthViewPaths;

export { type AuthViewPaths as A, type AuthView as a, authViewPaths as b };
