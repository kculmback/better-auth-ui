import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { ComponentType, ReactNode } from 'react';
import { SocialProvider } from 'better-auth/social-providers';
import { a as AuthClient, A as AuthHooks, b as AnyAuthClient } from './auth-hooks-DL8c3_Dy.cjs';
import { A as AuthMutators } from './auth-mutators-CK8vxOJz.cjs';
import { A as AuthViewPaths } from './auth-view-paths-Ctk94WJ-.cjs';
import * as react_hook_form from 'react-hook-form';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Drawer as Drawer$1 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { OTPInput } from 'input-otp';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TabsPrimitive from '@radix-ui/react-tabs';

declare const authLocalization: {
    INVALID_USERNAME_OR_PASSWORD: string;
    EMAIL_NOT_VERIFIED: string;
    UNEXPECTED_ERROR: string;
    USERNAME_IS_ALREADY_TAKEN: string;
    USERNAME_TOO_SHORT: string;
    USERNAME_TOO_LONG: string;
    INVALID_USERNAME: string;
    OTP_NOT_ENABLED: string;
    OTP_HAS_EXPIRED: string;
    TOTP_NOT_ENABLED: string;
    TWO_FACTOR_NOT_ENABLED: string;
    BACKUP_CODES_NOT_ENABLED: string;
    INVALID_BACKUP_CODE: string;
    INVALID_CODE: string;
    TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: string;
    INVALID_TWO_FACTOR_COOKIE: string;
    SUBSCRIPTION_NOT_FOUND: string;
    SUBSCRIPTION_PLAN_NOT_FOUND: string;
    ALREADY_SUBSCRIBED_PLAN: string;
    UNABLE_TO_CREATE_CUSTOMER: string;
    FAILED_TO_FETCH_PLANS: string;
    EMAIL_VERIFICATION_REQUIRED: string;
    SUBSCRIPTION_NOT_ACTIVE: string;
    SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION: string;
    INVALID_PHONE_NUMBER: string;
    PHONE_NUMBER_EXIST: string;
    INVALID_PHONE_NUMBER_OR_PASSWORD: string;
    OTP_NOT_FOUND: string;
    OTP_EXPIRED: string;
    INVALID_OTP: string;
    PHONE_NUMBER_NOT_VERIFIED: string;
    CHALLENGE_NOT_FOUND: string;
    YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: string;
    FAILED_TO_VERIFY_REGISTRATION: string;
    PASSKEY_NOT_FOUND: string;
    AUTHENTICATION_FAILED: string;
    UNABLE_TO_CREATE_SESSION: string;
    FAILED_TO_UPDATE_PASSKEY: string;
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION: string;
    YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS: string;
    ORGANIZATION_ALREADY_EXISTS: string;
    ORGANIZATION_NOT_FOUND: string;
    USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: string;
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION: string;
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION: string;
    NO_ACTIVE_ORGANIZATION: string;
    USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION: string;
    MEMBER_NOT_FOUND: string;
    ROLE_NOT_FOUND: string;
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: string;
    TEAM_ALREADY_EXISTS: string;
    TEAM_NOT_FOUND: string;
    YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER: string;
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: string;
    YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION: string;
    USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION: string;
    INVITATION_NOT_FOUND: string;
    YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: string;
    YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION: string;
    INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION: string;
    YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE: string;
    FAILED_TO_RETRIEVE_INVITATION: string;
    YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: string;
    UNABLE_TO_REMOVE_LAST_TEAM: string;
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER: string;
    ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: string;
    YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION: string;
    YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION: string;
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: string;
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: string;
    INVITATION_LIMIT_REACHED: string;
    INVALID_SESSION_TOKEN: string;
    PASSWORD_COMPROMISED: string;
    INVALID_OAUTH_CONFIGURATION: string;
    INVALID_EMAIL: string;
    USER_NOT_FOUND: string;
    TOO_MANY_ATTEMPTS: string;
    MISSING_SECRET_KEY: string;
    SERVICE_UNAVAILABLE: string;
    VERIFICATION_FAILED: string;
    MISSING_RESPONSE: string;
    UNKNOWN_ERROR: string;
    INVALID_METADATA_TYPE: string;
    REFILL_AMOUNT_AND_INTERVAL_REQUIRED: string;
    REFILL_INTERVAL_AND_AMOUNT_REQUIRED: string;
    USER_BANNED: string;
    UNAUTHORIZED_SESSION: string;
    KEY_NOT_FOUND: string;
    KEY_DISABLED: string;
    KEY_EXPIRED: string;
    USAGE_EXCEEDED: string;
    KEY_NOT_RECOVERABLE: string;
    EXPIRES_IN_IS_TOO_SMALL: string;
    EXPIRES_IN_IS_TOO_LARGE: string;
    INVALID_REMAINING: string;
    INVALID_PREFIX_LENGTH: string;
    INVALID_NAME_LENGTH: string;
    METADATA_DISABLED: string;
    RATE_LIMIT_EXCEEDED: string;
    NO_VALUES_TO_UPDATE: string;
    KEY_DISABLED_EXPIRATION: string;
    INVALID_API_KEY: string;
    INVALID_USER_ID_FROM_API_KEY: string;
    INVALID_API_KEY_GETTER_RETURN_TYPE: string;
    SERVER_ONLY_PROPERTY: string;
    FAILED_TO_CREATE_USER: string;
    COULD_NOT_CREATE_SESSION: string;
    ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: string;
    USER_ALREADY_EXISTS: string;
    YOU_CANNOT_BAN_YOURSELF: string;
    YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: string;
    YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: string;
    YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: string;
    YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: string;
    YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: string;
    YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: string;
    YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: string;
    YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: string;
    YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: string;
    BANNED_USER: string;
    FAILED_TO_CREATE_SESSION: string;
    FAILED_TO_UPDATE_USER: string;
    FAILED_TO_GET_SESSION: string;
    INVALID_PASSWORD: string;
    INVALID_EMAIL_OR_PASSWORD: string;
    SOCIAL_ACCOUNT_ALREADY_LINKED: string;
    PROVIDER_NOT_FOUND: string;
    INVALID_TOKEN: string;
    ID_TOKEN_NOT_SUPPORTED: string;
    FAILED_TO_GET_USER_INFO: string;
    USER_EMAIL_NOT_FOUND: string;
    PASSWORD_TOO_SHORT: string;
    PASSWORD_TOO_LONG: string;
    EMAIL_CAN_NOT_BE_UPDATED: string;
    CREDENTIAL_ACCOUNT_NOT_FOUND: string;
    SESSION_EXPIRED: string;
    FAILED_TO_UNLINK_LAST_ACCOUNT: string;
    ACCOUNT_NOT_FOUND: string;
    USER_ALREADY_HAS_PASSWORD: string;
    /** @default "Account" */
    ACCOUNT: string;
    /** @default "Accounts" */
    ACCOUNTS: string;
    /** @default "Manage your currently signed in accounts." */
    ACCOUNTS_DESCRIPTION: string;
    /** @default "Sign in to an additional account." */
    ACCOUNTS_INSTRUCTIONS: string;
    /** @default "Add Account" */
    ADD_ACCOUNT: string;
    /** @default "Add Passkey" */
    ADD_PASSKEY: string;
    /** @default "Already have an account?" */
    ALREADY_HAVE_AN_ACCOUNT: string;
    /** @default "Avatar" */
    AVATAR: string;
    /** @default "Click on the avatar to upload a custom one from your files." */
    AVATAR_DESCRIPTION: string;
    /** @default "An avatar is optional but strongly recommended." */
    AVATAR_INSTRUCTIONS: string;
    /** @default "Backup code is required" */
    BACKUP_CODE_REQUIRED: string;
    /** @default "Backup Codes" */
    BACKUP_CODES: string;
    /** @default "Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method." */
    BACKUP_CODES_DESCRIPTION: string;
    /** @default "Backup Code." */
    BACKUP_CODE_PLACEHOLDER: string;
    /** @default "Backup Code" */
    BACKUP_CODE: string;
    /** @default "Cancel" */
    CANCEL: string;
    /** @default "Change Password" */
    CHANGE_PASSWORD: string;
    /** @default "Enter your current password and a new password." */
    CHANGE_PASSWORD_DESCRIPTION: string;
    /** @default "Please use 8 characters at minimum." */
    CHANGE_PASSWORD_INSTRUCTIONS: string;
    /** @default "Your password has been changed." */
    CHANGE_PASSWORD_SUCCESS: string;
    /** @default "Confirm Password" */
    CONFIRM_PASSWORD: string;
    /** @default "Confirm Password" */
    CONFIRM_PASSWORD_PLACEHOLDER: string;
    /** @default "Confirm password is required" */
    CONFIRM_PASSWORD_REQUIRED: string;
    /** @default "Continue with Authenticator" */
    CONTINUE_WITH_AUTHENTICATOR: string;
    /** @default "Copied to clipboard" */
    COPIED_TO_CLIPBOARD: string;
    /** @default "Copy to clipboard" */
    COPY_TO_CLIPBOARD: string;
    /** @default "Copy all codes" */
    COPY_ALL_CODES: string;
    /** @default "Continue" */
    CONTINUE: string;
    /** @default "Current Password" */
    CURRENT_PASSWORD: string;
    /** @default "Current Password" */
    CURRENT_PASSWORD_PLACEHOLDER: string;
    /** @default "Current Session" */
    CURRENT_SESSION: string;
    /** @default "Delete" */
    DELETE: string;
    /** @default "Delete Avatar" */
    DELETE_AVATAR: string;
    /** @default "Delete Account" */
    DELETE_ACCOUNT: string;
    /** @default "Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution." */
    DELETE_ACCOUNT_DESCRIPTION: string;
    /** @default "Please confirm the deletion of your account. This action is not reversible, so please continue with caution." */
    DELETE_ACCOUNT_INSTRUCTIONS: string;
    /** @default "Please check your email to verify the deletion of your account." */
    DELETE_ACCOUNT_VERIFY: string;
    /** @default "Your account has been deleted." */
    DELETE_ACCOUNT_SUCCESS: string;
    /** @default "Disable Two-Factor" */
    DISABLE_TWO_FACTOR: string;
    /** @default "Choose a provider to login to your account" */
    DISABLED_CREDENTIALS_DESCRIPTION: string;
    /** @default "Don't have an account?" */
    DONT_HAVE_AN_ACCOUNT: string;
    /** @default "Done" */
    DONE: string;
    /** @default "Email" */
    EMAIL: string;
    /** @default "Enter the email address you want to use to log in." */
    EMAIL_DESCRIPTION: string;
    /** @default "Please enter a valid email address." */
    EMAIL_INSTRUCTIONS: string;
    /** @default "Email is the same" */
    EMAIL_IS_THE_SAME: string;
    /** @default "m@example.com" */
    EMAIL_PLACEHOLDER: string;
    /** @default "Email address is required" */
    EMAIL_REQUIRED: string;
    /** @default "Please check your email to verify the change." */
    EMAIL_VERIFY_CHANGE: string;
    /** @default "Please check your email for the verification link." */
    EMAIL_VERIFICATION: string;
    /** @default "Enable Two-Factor" */
    ENABLE_TWO_FACTOR: string;
    /** @default "is invalid" */
    IS_INVALID: string;
    /** @default "is required" */
    IS_REQUIRED: string;
    /** @default "is the same" */
    IS_THE_SAME: string;
    /** @default "Forgot authenticator?" */
    FORGOT_AUTHENTICATOR: string;
    /** @default "Forgot Password" */
    FORGOT_PASSWORD: string;
    /** @default "Send reset link" */
    FORGOT_PASSWORD_ACTION: string;
    /** @default "Enter your email to reset your password" */
    FORGOT_PASSWORD_DESCRIPTION: string;
    /** @default "Check your email for the password reset link." */
    FORGOT_PASSWORD_EMAIL: string;
    /** @default "Forgot your password?" */
    FORGOT_PASSWORD_LINK: string;
    /** @default "Link" */
    LINK: string;
    /** @default "Magic Link" */
    MAGIC_LINK: string;
    /** @default "Send magic link" */
    MAGIC_LINK_ACTION: string;
    /** @default "Enter your email to receive a magic link" */
    MAGIC_LINK_DESCRIPTION: string;
    /** @default "Check your email for the magic link" */
    MAGIC_LINK_EMAIL: string;
    /** @default "Email Code" */
    EMAIL_OTP: string;
    /** @default "Send code" */
    EMAIL_OTP_SEND_ACTION: string;
    /** @default "Verify code" */
    EMAIL_OTP_VERIFY_ACTION: string;
    /** @default "Enter your email to receive a code" */
    EMAIL_OTP_DESCRIPTION: string;
    /** @default "Please check your email for the verification code." */
    EMAIL_OTP_VERIFICATION_SENT: string;
    /** @default "Name" */
    NAME: string;
    /** @default "Please enter your full name, or a display name." */
    NAME_DESCRIPTION: string;
    /** @default "Please use 32 characters at maximum." */
    NAME_INSTRUCTIONS: string;
    /** @default "Name" */
    NAME_PLACEHOLDER: string;
    /** @default "New Password" */
    NEW_PASSWORD: string;
    /** @default "New Password" */
    NEW_PASSWORD_PLACEHOLDER: string;
    /** @default "New password is required" */
    NEW_PASSWORD_REQUIRED: string;
    /** @default "One-Time Password" */
    ONE_TIME_PASSWORD: string;
    /** @default "Or continue with" */
    OR_CONTINUE_WITH: string;
    /** @default "Passkey" */
    PASSKEY: string;
    /** @default "Passkeys" */
    PASSKEYS: string;
    /** @default "Manage your passkeys for secure access." */
    PASSKEYS_DESCRIPTION: string;
    /** @default "Securely access your account without a password." */
    PASSKEYS_INSTRUCTIONS: string;
    /** @default "Personal Account" */
    PERSONAL_ACCOUNT: string;
    /** @default "API Keys" */
    API_KEYS: string;
    /** @default "Manage your API keys for secure access." */
    API_KEYS_DESCRIPTION: string;
    /** @default "Generate API keys to access your account programmatically." */
    API_KEYS_INSTRUCTIONS: string;
    /** @default "Create API Key" */
    CREATE_API_KEY: string;
    /** @default "Enter a unique name for your API key to differentiate it from other keys." */
    CREATE_API_KEY_DESCRIPTION: string;
    /** @default "New API Key" */
    API_KEY_NAME_PLACEHOLDER: string;
    /** @default "API Key Created" */
    API_KEY_CREATED: string;
    /** @default "Please copy your API key and store it in a safe place. For security reasons we cannot show it again." */
    CREATE_API_KEY_SUCCESS: string;
    /** @default "Never Expires" */
    NEVER_EXPIRES: string;
    /** @default "Expires" */
    EXPIRES: string;
    /** @default "No Expiration" */
    NO_EXPIRATION: string;
    /** @default "Create Organization" */
    CREATE_ORGANIZATION: string;
    /** @default "Organization" */
    ORGANIZATION: string;
    /** @default "Name" */
    ORGANIZATION_NAME: string;
    /** @default "Acme Inc." */
    ORGANIZATION_NAME_PLACEHOLDER: string;
    /** @default "This is your organization's visible name." */
    ORGANIZATION_NAME_DESCRIPTION: string;
    /** @default "Please use 32 characters at maximum." */
    ORGANIZATION_NAME_INSTRUCTIONS: string;
    /** @default "Slug URL" */
    ORGANIZATION_SLUG: string;
    /** @default "This is your organization's URL namespace." */
    ORGANIZATION_SLUG_DESCRIPTION: string;
    /** @default "Please use 48 characters at maximum." */
    ORGANIZATION_SLUG_INSTRUCTIONS: string;
    /** @default "acme-inc" */
    ORGANIZATION_SLUG_PLACEHOLDER: string;
    /** @default "Organization created successfully" */
    CREATE_ORGANIZATION_SUCCESS: string;
    /** @default "Password" */
    PASSWORD: string;
    /** @default "Password" */
    PASSWORD_PLACEHOLDER: string;
    /** @default "Password is required" */
    PASSWORD_REQUIRED: string;
    /** @default "Passwords do not match" */
    PASSWORDS_DO_NOT_MATCH: string;
    /** @default "Providers" */
    PROVIDERS: string;
    /** @default "Connect your account with a third-party service." */
    PROVIDERS_DESCRIPTION: string;
    /** @default "Recover Account" */
    RECOVER_ACCOUNT: string;
    /** @default "Recover account" */
    RECOVER_ACCOUNT_ACTION: string;
    /** @default "Please enter a backup code to access your account" */
    RECOVER_ACCOUNT_DESCRIPTION: string;
    /** @default "Remember me" */
    REMEMBER_ME: string;
    /** @default "Resend code" */
    RESEND_CODE: string;
    /** @default "Resend verification email" */
    RESEND_VERIFICATION_EMAIL: string;
    /** @default "Reset Password" */
    RESET_PASSWORD: string;
    /** @default "Save new password" */
    RESET_PASSWORD_ACTION: string;
    /** @default "Enter your new password below" */
    RESET_PASSWORD_DESCRIPTION: string;
    /** @default "Password reset successfully" */
    RESET_PASSWORD_SUCCESS: string;
    /** @default "Request failed" */
    REQUEST_FAILED: string;
    /** @default "Revoke" */
    REVOKE: string;
    /** @default "Delete API Key" */
    DELETE_API_KEY: string;
    /** @default "Are you sure you want to delete this API key?" */
    DELETE_API_KEY_CONFIRM: string;
    /** @default "API Key" */
    API_KEY: string;
    /** @default "Sign In" */
    SIGN_IN: string;
    /** @default "Login" */
    SIGN_IN_ACTION: string;
    /** @default "Enter your email below to login to your account" */
    SIGN_IN_DESCRIPTION: string;
    /** @default "Enter your username or email below to login to your account" */
    SIGN_IN_USERNAME_DESCRIPTION: string;
    /** @default "Sign in with" */
    SIGN_IN_WITH: string;
    /** @default "Sign Out" */
    SIGN_OUT: string;
    /** @default "Sign Up" */
    SIGN_UP: string;
    /** @default "Create an account" */
    SIGN_UP_ACTION: string;
    /** @default "Enter your information to create an account" */
    SIGN_UP_DESCRIPTION: string;
    /** @default "Check your email for the verification link." */
    SIGN_UP_EMAIL: string;
    /** @default "Sessions" */
    SESSIONS: string;
    /** @default "Manage your active sessions and revoke access." */
    SESSIONS_DESCRIPTION: string;
    /** @default "Set Password" */
    SET_PASSWORD: string;
    /** @default "Click the button below to receive an email to set up a password for your account." */
    SET_PASSWORD_DESCRIPTION: string;
    /** @default "Settings" */
    SETTINGS: string;
    /** @default "Save" */
    SAVE: string;
    /** @default "Security" */
    SECURITY: string;
    /** @default "Switch Account" */
    SWITCH_ACCOUNT: string;
    /** @default "Trust this device" */
    TRUST_DEVICE: string;
    /** @default "Two-Factor" */
    TWO_FACTOR: string;
    /** @default "Verify code" */
    TWO_FACTOR_ACTION: string;
    /** @default "Please enter your one-time password to continue" */
    TWO_FACTOR_DESCRIPTION: string;
    /** @default "Add an extra layer of security to your account." */
    TWO_FACTOR_CARD_DESCRIPTION: string;
    /** @default "Please enter your password to disable 2FA." */
    TWO_FACTOR_DISABLE_INSTRUCTIONS: string;
    /** @default "Please enter your password to enable 2FA" */
    TWO_FACTOR_ENABLE_INSTRUCTIONS: string;
    /** @default "Two-factor authentication has been enabled" */
    TWO_FACTOR_ENABLED: string;
    /** @default "Two-Factor Authentication has been disabled" */
    TWO_FACTOR_DISABLED: string;
    /** @default "Two-Factor Authentication" */
    TWO_FACTOR_PROMPT: string;
    /** @default "Scan the QR Code with your Authenticator" */
    TWO_FACTOR_TOTP_LABEL: string;
    /** @default "Send verification code" */
    SEND_VERIFICATION_CODE: string;
    /** @default "Unlink" */
    UNLINK: string;
    /** @default "Updated successfully" */
    UPDATED_SUCCESSFULLY: string;
    /** @default "Username" */
    USERNAME: string;
    /** @default "Enter the username you want to use to log in." */
    USERNAME_DESCRIPTION: string;
    /** @default "Please use 32 characters at maximum." */
    USERNAME_INSTRUCTIONS: string;
    /** @default "Username" */
    USERNAME_PLACEHOLDER: string;
    /** @default "Username or email" */
    SIGN_IN_USERNAME_PLACEHOLDER: string;
    /** @default "Verify Your Email" */
    VERIFY_YOUR_EMAIL: string;
    /** @default "Please verify your email address. Check your inbox for the verification email. If you haven't received the email, click the button below to resend." */
    VERIFY_YOUR_EMAIL_DESCRIPTION: string;
    /** @default "Go back" */
    GO_BACK: string;
    /** @default "Your session is not fresh. Please sign in again." */
    SESSION_NOT_FRESH: string;
    /** @default "Upload Avatar" */
    UPLOAD_AVATAR: string;
    /** @default "Logo" */
    LOGO: string;
    /** @default "Click on the logo to upload a custom one from your files." */
    LOGO_DESCRIPTION: string;
    /** @default "A logo is optional but strongly recommended." */
    LOGO_INSTRUCTIONS: string;
    /** @default "Upload" */
    UPLOAD: string;
    /** @default "Upload Logo" */
    UPLOAD_LOGO: string;
    /** @default "Delete Logo" */
    DELETE_LOGO: string;
    /** @default "Privacy Policy" */
    PRIVACY_POLICY: string;
    /** @default "Terms of Service" */
    TERMS_OF_SERVICE: string;
    /** @default "This site is protected by reCAPTCHA." */
    PROTECTED_BY_RECAPTCHA: string;
    /** @default "By continuing, you agree to the" */
    BY_CONTINUING_YOU_AGREE: string;
    /** @default "User" */
    USER: string;
    /** @default "Organizations" */
    ORGANIZATIONS: string;
    /** @default "Manage your organizations and memberships." */
    ORGANIZATIONS_DESCRIPTION: string;
    /** @default "Create an organization to collaborate with other users." */
    ORGANIZATIONS_INSTRUCTIONS: string;
    /** @default "Leave Organization" */
    LEAVE_ORGANIZATION: string;
    /** @default "Are you sure you want to leave this organization?" */
    LEAVE_ORGANIZATION_CONFIRM: string;
    /** @default "You have successfully left the organization." */
    LEAVE_ORGANIZATION_SUCCESS: string;
    /** @default "Manage Organization" */
    MANAGE_ORGANIZATION: string;
    /** @default "Remove Member" */
    REMOVE_MEMBER: string;
    /** @default "Are you sure you want to remove this member from the organization?" */
    REMOVE_MEMBER_CONFIRM: string;
    /** @default "Member removed successfully" */
    REMOVE_MEMBER_SUCCESS: string;
    /** @default "Invite Member" */
    INVITE_MEMBER: string;
    /** @default "Members" */
    MEMBERS: string;
    /** @default "Add or remove members and manage their roles." */
    MEMBERS_DESCRIPTION: string;
    /** @default "Invite new members to your organization." */
    MEMBERS_INSTRUCTIONS: string;
    /** @default "Send an invitation to add a new member to your organization." */
    INVITE_MEMBER_DESCRIPTION: string;
    /** @default "Role" */
    ROLE: string;
    /** @default "Select a role" */
    SELECT_ROLE: string;
    /** @default "Admin" */
    ADMIN: string;
    /** @default "Member" */
    MEMBER: string;
    /** @default "Guest" */
    GUEST: string;
    /** @default "Owner" */
    OWNER: string;
    /** @default "Update the role for this member" */
    UPDATE_ROLE_DESCRIPTION: string;
    /** @default "Update Role" */
    UPDATE_ROLE: string;
    /** @default "Member role updated successfully" */
    MEMBER_ROLE_UPDATED: string;
    /** @default "Send Invitation" */
    SEND_INVITATION: string;
    /** @default "Invitation sent successfully" */
    SEND_INVITATION_SUCCESS: string;
    /** @default "Pending Invitations" */
    PENDING_INVITATIONS: string;
    /** @default "Manage pending invitations to your organization." */
    PENDING_INVITATIONS_DESCRIPTION: string;
    /** @default "Cancel Invitation" */
    CANCEL_INVITATION: string;
    /** @default "Invitation cancelled successfully" */
    INVITATION_CANCELLED: string;
    /** @default "Accept Invitation" */
    ACCEPT_INVITATION: string;
    /** @default "You have been invited to join an organization." */
    ACCEPT_INVITATION_DESCRIPTION: string;
    /** @default "Invitation accepted successfully" */
    INVITATION_ACCEPTED: string;
    /** @default "Invitation rejected successfully" */
    INVITATION_REJECTED: string;
    /** @default "Accept" */
    ACCEPT: string;
    /** @default "Reject" */
    REJECT: string;
    /** @default "This invitation has expired" */
    INVITATION_EXPIRED: string;
    /** @default "Delete Organization" */
    DELETE_ORGANIZATION: string;
    /** @default "Permanently remove your organization and all of its contents. This action is not reversible — please continue with caution." */
    DELETE_ORGANIZATION_DESCRIPTION: string;
    /** @default "Organization deleted successfully" */
    DELETE_ORGANIZATION_SUCCESS: string;
    /** @default "Enter the organization slug to continue:" */
    DELETE_ORGANIZATION_INSTRUCTIONS: string;
    /** @default "Organization slug is required" */
    SLUG_REQUIRED: string;
    /** @default "The slug does not match" */
    SLUG_DOES_NOT_MATCH: string;
};
type AuthLocalization = Partial<typeof authLocalization>;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Avatar({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Image>): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Fallback>): react_jsx_runtime.JSX.Element;

type PasswordValidation = {
    /**
     * Maximum password length
     */
    maxLength?: number;
    /**
     * Minimum password length
     */
    minLength?: number;
    /**
     * Password validation regex
     */
    regex?: RegExp;
};

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): react_jsx_runtime.JSX.Element;

interface ProviderIconProps {
    className?: string;
}
type ProviderIcon = ComponentType<ProviderIconProps>;
declare const AppleIcon: ProviderIcon;
declare const DiscordIcon: ProviderIcon;
declare const DropboxIcon: ProviderIcon;
declare const FacebookIcon: ProviderIcon;
declare const GitHubIcon: ProviderIcon;
declare const GitLabIcon: ProviderIcon;
declare const GoogleIcon: ProviderIcon;
declare const KickIcon: ProviderIcon;
declare const LinkedInIcon: ProviderIcon;
declare const MicrosoftIcon: ProviderIcon;
declare const RedditIcon: ProviderIcon;
declare const RobloxIcon: ProviderIcon;
declare const SpotifyIcon: ProviderIcon;
declare const TikTokIcon: ProviderIcon;
declare const TwitchIcon: ProviderIcon;
declare const VKIcon: ProviderIcon;
declare const XIcon: ProviderIcon;
declare const ZoomIcon: ProviderIcon;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): react_jsx_runtime.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Overlay>): react_jsx_runtime.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DialogFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

type FieldType = "string" | "number" | "boolean";
interface AdditionalField {
    description?: ReactNode;
    instructions?: ReactNode;
    label: ReactNode;
    placeholder?: string;
    required?: boolean;
    type: FieldType;
    validate?: (value: string) => Promise<boolean>;
}
interface AdditionalFields {
    [key: string]: AdditionalField;
}

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof alertVariants>): react_jsx_runtime.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof CheckboxPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Drawer({ ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): react_jsx_runtime.JSX.Element;
declare function DrawerTrigger({ ...props }: React$1.ComponentProps<typeof Drawer$1.Trigger>): react_jsx_runtime.JSX.Element;
declare function DrawerPortal({ ...props }: React$1.ComponentProps<typeof Drawer$1.Portal>): react_jsx_runtime.JSX.Element;
declare function DrawerClose({ ...props }: React$1.ComponentProps<typeof Drawer$1.Close>): react_jsx_runtime.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Overlay>): react_jsx_runtime.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React$1.ComponentProps<typeof Drawer$1.Content>): react_jsx_runtime.JSX.Element;
declare function DrawerHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DrawerFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DrawerTitle({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Title>): react_jsx_runtime.JSX.Element;
declare function DrawerDescription({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Description>): react_jsx_runtime.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Sub>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): react_jsx_runtime.JSX.Element;

declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function FormLabel({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot>): react_jsx_runtime.JSX.Element;
declare function FormDescription({ className, ...props }: React$1.ComponentProps<"p">): react_jsx_runtime.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): react_jsx_runtime.JSX.Element | null;

declare function InputOTP({ className, containerClassName, ...props }: React$1.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function InputOTPGroup({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React$1.ComponentProps<"div"> & {
    index: number;
}): react_jsx_runtime.JSX.Element;
declare function InputOTPSeparator({ ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SelectGroup({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Value>): react_jsx_runtime.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}): react_jsx_runtime.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Label>): react_jsx_runtime.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): react_jsx_runtime.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): react_jsx_runtime.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof SeparatorPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Tabs({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TabsList({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.List>): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const defaultComponents: {
    readonly Avatar: typeof Avatar;
    readonly AvatarFallback: typeof AvatarFallback;
    readonly AvatarImage: typeof AvatarImage;
    readonly Alert: typeof Alert;
    readonly AlertDescription: typeof AlertDescription;
    readonly AlertTitle: typeof AlertTitle;
    readonly Button: typeof Button;
    readonly Card: typeof Card;
    readonly CardAction: typeof CardAction;
    readonly CardContent: typeof CardContent;
    readonly CardDescription: typeof CardDescription;
    readonly CardFooter: typeof CardFooter;
    readonly CardHeader: typeof CardHeader;
    readonly CardTitle: typeof CardTitle;
    readonly Checkbox: typeof Checkbox;
    readonly Dialog: typeof Dialog;
    readonly DialogClose: typeof DialogClose;
    readonly DialogContent: typeof DialogContent;
    readonly DialogDescription: typeof DialogDescription;
    readonly DialogFooter: typeof DialogFooter;
    readonly DialogHeader: typeof DialogHeader;
    readonly DialogOverlay: typeof DialogOverlay;
    readonly DialogPortal: typeof DialogPortal;
    readonly DialogTitle: typeof DialogTitle;
    readonly DialogTrigger: typeof DialogTrigger;
    readonly Drawer: typeof Drawer;
    readonly DrawerClose: typeof DrawerClose;
    readonly DrawerContent: typeof DrawerContent;
    readonly DrawerDescription: typeof DrawerDescription;
    readonly DrawerFooter: typeof DrawerFooter;
    readonly DrawerHeader: typeof DrawerHeader;
    readonly DrawerOverlay: typeof DrawerOverlay;
    readonly DrawerPortal: typeof DrawerPortal;
    readonly DrawerTitle: typeof DrawerTitle;
    readonly DrawerTrigger: typeof DrawerTrigger;
    readonly DropdownMenu: typeof DropdownMenu;
    readonly DropdownMenuCheckboxItem: typeof DropdownMenuCheckboxItem;
    readonly DropdownMenuContent: typeof DropdownMenuContent;
    readonly DropdownMenuGroup: typeof DropdownMenuGroup;
    readonly DropdownMenuItem: typeof DropdownMenuItem;
    readonly DropdownMenuLabel: typeof DropdownMenuLabel;
    readonly DropdownMenuPortal: typeof DropdownMenuPortal;
    readonly DropdownMenuRadioGroup: typeof DropdownMenuRadioGroup;
    readonly DropdownMenuRadioItem: typeof DropdownMenuRadioItem;
    readonly DropdownMenuSeparator: typeof DropdownMenuSeparator;
    readonly DropdownMenuShortcut: typeof DropdownMenuShortcut;
    readonly DropdownMenuSub: typeof DropdownMenuSub;
    readonly DropdownMenuSubContent: typeof DropdownMenuSubContent;
    readonly DropdownMenuSubTrigger: typeof DropdownMenuSubTrigger;
    readonly DropdownMenuTrigger: typeof DropdownMenuTrigger;
    readonly Form: <TFieldValues extends react_hook_form.FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
    readonly FormControl: typeof FormControl;
    readonly FormDescription: typeof FormDescription;
    readonly FormField: <TFieldValues extends react_hook_form.FieldValues = react_hook_form.FieldValues, TName extends react_hook_form.FieldPath<TFieldValues> = react_hook_form.FieldPath<TFieldValues>>({ ...props }: react_hook_form.ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
    readonly FormItem: typeof FormItem;
    readonly FormLabel: typeof FormLabel;
    readonly FormMessage: typeof FormMessage;
    readonly Input: typeof Input;
    readonly InputOTP: typeof InputOTP;
    readonly InputOTPGroup: typeof InputOTPGroup;
    readonly InputOTPSeparator: typeof InputOTPSeparator;
    readonly InputOTPSlot: typeof InputOTPSlot;
    readonly Label: typeof Label;
    readonly Select: typeof Select;
    readonly SelectContent: typeof SelectContent;
    readonly SelectGroup: typeof SelectGroup;
    readonly SelectItem: typeof SelectItem;
    readonly SelectLabel: typeof SelectLabel;
    readonly SelectScrollDownButton: typeof SelectScrollDownButton;
    readonly SelectScrollUpButton: typeof SelectScrollUpButton;
    readonly SelectSeparator: typeof SelectSeparator;
    readonly SelectTrigger: typeof SelectTrigger;
    readonly SelectValue: typeof SelectValue;
    readonly Separator: typeof Separator;
    readonly Skeleton: typeof Skeleton;
    readonly Tabs: typeof Tabs;
    readonly TabsContent: typeof TabsContent;
    readonly TabsList: typeof TabsList;
    readonly TabsTrigger: typeof TabsTrigger;
};
type DefaultComponents = typeof defaultComponents;
type Components = {
    -readonly [K in keyof DefaultComponents]: DefaultComponents[K];
};

type AvatarOptions = {
    /**
     * Upload an avatar image and return the URL string
     * @remarks `(file: File) => Promise<string>`
     */
    upload?: (file: File) => Promise<string | undefined | null>;
    /**
     * Avatar size for resizing
     * @default 128 (or 256 if upload is provided)
     */
    size: number;
    /**
     * File extension for avatar uploads
     * @default "png"
     */
    extension: string;
};

type CaptchaProvider = "cloudflare-turnstile" | "google-recaptcha-v2-checkbox" | "google-recaptcha-v2-invisible" | "google-recaptcha-v3" | "hcaptcha";

type CaptchaOptions = {
    /**
     * Captcha site key
     */
    siteKey: string;
    /**
     * Captcha provider type
     */
    provider: CaptchaProvider;
    /**
     * Hide the captcha badge
     * @default false
     */
    hideBadge?: boolean;
    /**
     * Use recaptcha.net domain instead of google.com
     * @default false
     */
    recaptchaNet?: boolean;
    /**
     * Enable enterprise mode for Google reCAPTCHA
     * @default false
     */
    enterprise?: boolean;
    /**
     * Overrides the default array of paths where captcha validation is enforced
     * @default ["/sign-up/email", "/sign-in/email", "/forget-password"]
     */
    endpoints?: string[];
};

type CredentialsOptions = {
    /**
     * Enable or disable the Confirm Password input
     * @default false
     */
    confirmPassword?: boolean;
    /**
     * Enable or disable Forgot Password flow
     * @default true
     */
    forgotPassword?: boolean;
    /**
     * Customize the password validation
     */
    passwordValidation?: PasswordValidation;
    /**
     * Enable or disable Remember Me checkbox
     * @default false
     */
    rememberMe?: boolean;
    /**
     * Enable or disable Username support
     * @default false
     */
    username?: boolean;
};

type DeleteUserOptions = {
    /**
     * Enable or disable email verification for account deletion
     * @default undefined
     */
    verification?: boolean;
};

declare const socialProviders: readonly [{
    readonly provider: "apple";
    readonly name: "Apple";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "discord";
    readonly name: "Discord";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "dropbox";
    readonly name: "Dropbox";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "facebook";
    readonly name: "Facebook";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "github";
    readonly name: "GitHub";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "gitlab";
    readonly name: "GitLab";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "google";
    readonly name: "Google";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "kick";
    readonly name: "Kick";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "linkedin";
    readonly name: "LinkedIn";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "microsoft";
    readonly name: "Microsoft";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "reddit";
    readonly name: "Reddit";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "roblox";
    readonly name: "Roblox";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "spotify";
    readonly name: "Spotify";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "tiktok";
    readonly name: "TikTok";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "twitch";
    readonly name: "Twitch";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "vk";
    readonly name: "VK";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "twitter";
    readonly name: "X";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "zoom";
    readonly name: "Zoom";
    readonly icon: ProviderIcon;
}];
type Provider = {
    provider: string;
    name: string;
    icon?: ProviderIcon;
};

type GenericOAuthOptions = {
    /**
     * Custom OAuth Providers
     * @default []
     */
    providers: Provider[];
    /**
     * Custom generic OAuth sign in function
     */
    signIn?: (params: Parameters<AuthClient["signIn"]["oauth2"]>[0]) => Promise<unknown>;
};

type GravatarOptions = {
    /**
     * Default image type or URL
     * Options: '404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank', or custom URL
     */
    d?: string;
    /**
     * Image size in pixels (1-2048)
     */
    size?: number;
    /**
     * Whether to append .jpg extension to the hash
     * @default false
     */
    jpg?: boolean;
    /**
     * Force default image even if user has Gravatar
     * @default false
     */
    forceDefault?: boolean;
};

type Link = ComponentType<{
    href: string;
    className?: string;
    children: ReactNode;
}>;

type OrganizationLogoOptions = {
    /**
     * Upload a logo image and return the URL string
     * @remarks `(file: File) => Promise<string>`
     */
    upload?: (file: File) => Promise<string | undefined | null>;
    /**
     * Logo size for resizing
     * @default 256 if upload is provided, 128 otherwise
     */
    size: number;
    /**
     * File extension for logo uploads
     * @default "png"
     */
    extension: string;
};
type OrganizationOptions = {
    /**
     * Logo configuration
     * @default undefined
     */
    logo?: boolean | Partial<OrganizationLogoOptions>;
    /**
     * Custom roles to add to the built-in roles (owner, admin, member)
     * @default []
     */
    customRoles?: Array<{
        role: string;
        label: string;
    }>;
};
type OrganizationOptionsContext = {
    /**
     * Logo configuration
     * @default undefined
     */
    logo?: OrganizationLogoOptions;
    /**
     * Custom roles to add to the built-in roles (owner, admin, member)
     * @default []
     */
    customRoles: Array<{
        role: string;
        label: string;
    }>;
};

type ToastVariant = "default" | "success" | "error" | "info" | "warning";
type RenderToast = ({ variant, message }: {
    variant?: ToastVariant;
    message?: string;
}) => void;

type SettingsOptions = {
    /**
     * Custom Settings URL
     */
    url?: string;
    /**
     * Base path for settings views
     */
    basePath?: string;
    /**
     * Array of fields to show in `<SettingsCards />`
     * @default ["image", "name"]
     */
    fields: string[];
};

type SignUpOptions = {
    /**
     * Array of fields to show in Sign Up form
     * @default ["name"]
     */
    fields?: string[];
};

type SocialOptions = {
    /**
     * Array of Social Providers to enable
     * @remarks `SocialProvider[]`
     */
    providers: SocialProvider[];
    /**
     * Custom social sign in function
     */
    signIn?: (params: Parameters<AuthClient["signIn"]["social"]>[0]) => Promise<unknown>;
};

declare const defaultNavigate: (href: string) => void;
declare const defaultReplace: (href: string) => void;
type AuthUIContextType = {
    authClient: AuthClient;
    /**
     * Additional fields for users
     */
    additionalFields?: AdditionalFields;
    /**
     * API Key plugin configuration
     */
    apiKey?: {
        /**
         * Prefix for API Keys
         */
        prefix?: string;
        /**
         * Metadata for API Keys
         */
        metadata?: Record<string, unknown>;
    } | boolean;
    /**
     * Shadcn components to be used by package
     * @default Components
     */
    components: Components;
    /**
     * Avatar configuration
     * @default undefined
     */
    avatar?: AvatarOptions;
    /**
     * Base path for the auth views
     * @default "/auth"
     */
    basePath: string;
    /**
     * Front end base URL for auth API callbacks
     */
    baseURL?: string;
    /**
     * Captcha configuration
     */
    captcha?: CaptchaOptions;
    credentials?: CredentialsOptions;
    /**
     * Default redirect URL after authenticating
     * @default "/"
     */
    redirectTo: string;
    /**
     * Enable or disable user change email support
     * @default true
     */
    changeEmail?: boolean;
    /**
     * User Account deletion configuration
     * @default undefined
     */
    deleteUser?: DeleteUserOptions;
    /**
     * Show Verify Email card for unverified emails
     */
    emailVerification?: boolean;
    /**
     * Freshness age for Session data
     * @default 60 * 60 * 24
     */
    freshAge: number;
    /**
     * Generic OAuth provider configuration
     */
    genericOAuth?: GenericOAuthOptions;
    /**
     * Gravatar configuration
     */
    gravatar?: boolean | GravatarOptions;
    hooks: AuthHooks;
    localization: AuthLocalization;
    /**
     * Enable or disable Magic Link support
     * @default false
     */
    magicLink?: boolean;
    /**
     * Enable or disable Email OTP support
     * @default false
     */
    emailOTP?: boolean;
    /**
     * Enable or disable Multi Session support
     * @default false
     */
    multiSession?: boolean;
    mutators: AuthMutators;
    /**
     * Whether the name field should be required
     * @default true
     */
    nameRequired?: boolean;
    /**
     * Enable or disable One Tap support
     * @default false
     */
    oneTap?: boolean;
    /**
     * Perform some User updates optimistically
     * @default false
     */
    optimistic?: boolean;
    organization?: OrganizationOptionsContext;
    /**
     * Enable or disable Passkey support
     * @default false
     */
    passkey?: boolean;
    /**
     * Forces better-auth-tanstack to refresh the Session on the auth callback page
     * @default false
     */
    persistClient?: boolean;
    settings?: SettingsOptions;
    /**
     * Sign Up configuration
     */
    signUp?: SignUpOptions;
    /**
     * Social provider configuration
     */
    social?: SocialOptions;
    toast: RenderToast;
    /**
     * Enable or disable two-factor authentication support
     * @default undefined
     */
    twoFactor?: ("otp" | "totp")[];
    viewPaths: AuthViewPaths;
    /**
     * Navigate to a new URL
     * @default window.location.href
     */
    navigate: typeof defaultNavigate;
    /**
     * Called whenever the Session changes
     */
    onSessionChange?: () => void | Promise<void>;
    /**
     * Replace the current URL
     * @default navigate
     */
    replace: typeof defaultReplace;
    /**
     * Custom Link component for navigation
     * @default <a>
     */
    Link: Link;
};
type AuthUIProviderProps = {
    children: ReactNode;
    /**
     * Better Auth client returned from createAuthClient
     * @default Required
     * @remarks `AuthClient`
     */
    authClient: AnyAuthClient;
    /**
     * Provide your own components to override the default shadcn components included in this package
     * @default undefined
     */
    components?: Partial<Components>;
    /**
     * Avatar configuration
     * @default undefined
     */
    avatar?: boolean | Partial<AvatarOptions>;
    /**
     * @deprecated use avatar.extension instead
     */
    avatarExtension?: string;
    /**
     * @deprecated use avatar.size instead
     */
    avatarSize?: number;
    /**
     * @deprecated use deleteUser.verification instead
     */
    deleteAccountVerification?: boolean;
    /**
     * User Account deletion configuration
     * @default undefined
     */
    deleteUser?: DeleteUserOptions | boolean;
    /**
     * ADVANCED: Custom hooks for fetching auth data
     */
    hooks?: Partial<AuthHooks>;
    /**
     * Settings configuration
     * @default { fields: ["image", "name"] }
     */
    settings?: boolean | Partial<SettingsOptions>;
    /**
     * @deprecated use settings.fields instead
     */
    settingsFields?: string[];
    /**
     * @deprecated use settings.url instead
     */
    settingsURL?: string;
    /**
     * Customize the paths for the auth views
     * @default authViewPaths
     * @remarks `AuthViewPaths`
     */
    viewPaths?: Partial<AuthViewPaths>;
    /**
     * Render custom Toasts
     * @default Sonner
     */
    toast?: RenderToast;
    /**
     * Customize the Localization strings
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
    /**
     * ADVANCED: Custom mutators for updating auth data
     */
    mutators?: Partial<AuthMutators>;
    /**
     * @deprecated use social.providers instead
     */
    providers?: SocialProvider[];
    /**
     * Organization plugin configuration
     */
    organization?: OrganizationOptions | boolean;
    /**
     * @deprecated use genericOAuth.providers instead
     */
    otherProviders?: Provider[];
    /**
     * @deprecated use social.signIn instead
     */
    signInSocial?: (params: Parameters<AuthClient["signIn"]["social"]>[0]) => Promise<unknown>;
    /**
     * Enable or disable Credentials support
     * @default { forgotPassword: true }
     */
    credentials?: boolean | CredentialsOptions;
    /**
     * @deprecated use credentials.confirmPassword instead
     */
    confirmPassword?: boolean;
    /**
     * @deprecated use credentials.forgotPassword instead
     */
    forgotPassword?: boolean;
    /**
     * @deprecated use credentials.passwordValidation instead
     */
    passwordValidation?: PasswordValidation;
    /**
     * @deprecated use credentials.rememberMe instead
     */
    rememberMe?: boolean;
    /**
     * @deprecated use avatar.upload instead
     */
    uploadAvatar?: (file: File) => Promise<string | undefined | null>;
    /**
     * @deprecated use credentials.username instead
     */
    username?: boolean;
    /**
     * Enable or disable Sign Up form
     * @default { fields: ["name"] }
     */
    signUp?: SignUpOptions | boolean;
    /**
     * @deprecated use signUp.fields instead
     */
    signUpFields?: string[];
} & Partial<Omit<AuthUIContextType, "authClient" | "viewPaths" | "localization" | "mutators" | "toast" | "hooks" | "avatar" | "settings" | "deleteUser" | "credentials" | "signUp" | "organization">>;
declare const AuthUIContext: React$1.Context<AuthUIContextType>;
declare const AuthUIProvider: ({ children, authClient: authClientProp, components: componentsProp, avatar: avatarProp, settings: settingsProp, settingsFields, settingsURL, avatarExtension, avatarSize, deleteUser: deleteUserProp, deleteAccountVerification, social: socialProp, genericOAuth: genericOAuthProp, providers, otherProviders, signInSocial, basePath, baseURL, captcha, redirectTo, credentials: credentialsProp, confirmPassword, forgotPassword, passwordValidation, rememberMe, username, changeEmail, freshAge, hooks: hooksProp, mutators: mutatorsProp, localization: localizationProp, nameRequired, organization: organizationProp, signUp: signUpProp, signUpFields, toast, viewPaths: viewPathsProp, navigate, replace, uploadAvatar, Link, ...props }: AuthUIProviderProps) => react_jsx_runtime.JSX.Element;

export { type AuthUIProviderProps as A, Button as B, Card as C, Dialog as D, type FieldType as F, GitHubIcon as G, Input as I, KickIcon as K, LinkedInIcon as L, MicrosoftIcon as M, type PasswordValidation as P, RedditIcon as R, SpotifyIcon as S, TikTokIcon as T, VKIcon as V, XIcon as X, ZoomIcon as Z, type AuthLocalization as a, Avatar as b, type ProviderIconProps as c, type ProviderIcon as d, AppleIcon as e, DiscordIcon as f, DropboxIcon as g, FacebookIcon as h, GitLabIcon as i, GoogleIcon as j, RobloxIcon as k, TwitchIcon as l, defaultComponents as m, type Components as n, authLocalization as o, type AuthUIContextType as p, AuthUIContext as q, AuthUIProvider as r, socialProviders as s, type Provider as t };
