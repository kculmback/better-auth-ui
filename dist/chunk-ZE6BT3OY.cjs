"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } var _class;"use client"






var _chunkQB6CPTMTcjs = require('./chunk-QB6CPTMT.cjs');

// src/hooks/use-auth-data.ts







var _react = require('react'); var React = _interopRequireWildcard(_react); var React2 = _interopRequireWildcard(_react);

// src/lib/auth-data-cache.ts
var AuthDataCache = (_class = class {constructor() { _class.prototype.__init.call(this);_class.prototype.__init2.call(this);_class.prototype.__init3.call(this); }
  __init() {this.cache = /* @__PURE__ */ new Map()}
  __init2() {this.listeners = /* @__PURE__ */ new Map()}
  __init3() {this.inFlightRequests = /* @__PURE__ */ new Map()}
  get(key) {
    return this.cache.get(key);
  }
  set(key, data) {
    const entry = {
      data,
      timestamp: Date.now(),
      isRefetching: false
    };
    this.cache.set(key, entry);
    this.notify(key);
  }
  setRefetching(key, isRefetching) {
    const entry = this.cache.get(key);
    if (entry) {
      entry.isRefetching = isRefetching;
      this.notify(key);
    }
  }
  clear(key) {
    if (key) {
      this.cache.delete(key);
      this.inFlightRequests.delete(key);
      this.notify(key);
    } else {
      this.cache.clear();
      this.inFlightRequests.clear();
      const keys = Array.from(this.listeners.keys());
      for (const key2 of keys) {
        this.notify(key2);
      }
    }
  }
  getInFlightRequest(key) {
    return this.inFlightRequests.get(key);
  }
  setInFlightRequest(key, promise) {
    this.inFlightRequests.set(key, promise);
  }
  removeInFlightRequest(key) {
    this.inFlightRequests.delete(key);
  }
  subscribe(key, callback) {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, /* @__PURE__ */ new Set());
    }
    this.listeners.get(key).add(callback);
    return () => {
      const callbacks = this.listeners.get(key);
      if (callbacks) {
        callbacks.delete(callback);
        if (callbacks.size === 0) {
          this.listeners.delete(key);
        }
      }
    };
  }
  notify(key) {
    const callbacks = this.listeners.get(key);
    if (callbacks) {
      const callbackArray = Array.from(callbacks);
      for (const callback of callbackArray) {
        callback();
      }
    }
  }
}, _class);
var authDataCache = new AuthDataCache();

// src/lib/auth-ui-provider.tsx







var _sonner = require('sonner');

// src/components/captcha/recaptcha-v3.tsx



var _reactrecaptchav3 = require('@wojtekmaj/react-recaptcha-v3');


// src/hooks/use-hydrated.ts

function subscribe() {
  return () => {
  };
}
function useIsHydrated() {
  return _react.useSyncExternalStore.call(void 0, 
    subscribe,
    () => true,
    () => false
  );
}

// src/hooks/use-lang.ts

function useLang() {
  const [lang, setLang] = _react.useState.call(void 0, );
  _react.useEffect.call(void 0, () => {
    const checkLang = () => {
      const currentLang = document.documentElement.getAttribute("lang");
      setLang(_nullishCoalesce(currentLang, () => ( void 0)));
    };
    checkLang();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "lang") {
          checkLang();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return { lang };
}

// src/hooks/use-theme.ts

function useTheme() {
  const [theme, setTheme] = _react.useState.call(void 0, "light");
  _react.useEffect.call(void 0, () => {
    const checkTheme = () => {
      var _a;
      const isDark = document.documentElement.classList.contains("dark") || ((_a = document.documentElement.getAttribute("style")) == null ? void 0 : _a.includes("color-scheme: dark"));
      setTheme(isDark ? "dark" : "light");
    };
    checkTheme();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "style" || mutation.attributeName === "class") {
          checkTheme();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return { theme };
}

// src/components/captcha/recaptcha-v3.tsx
var _jsxruntime = require('react/jsx-runtime');
function RecaptchaV3({
  children
}) {
  const isHydrated = useIsHydrated();
  const { captcha } = _react.useContext.call(void 0, AuthUIContext);
  if ((captcha == null ? void 0 : captcha.provider) !== "google-recaptcha-v3") return children;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    _reactrecaptchav3.GoogleReCaptchaProvider,
    {
      reCaptchaKey: captcha.siteKey,
      useEnterprise: captcha.enterprise,
      useRecaptchaNet: captcha.recaptchaNet,
      children: [
        isHydrated && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
                    .grecaptcha-badge {
                        visibility: hidden;
                        border-radius: var(--radius) !important;
                        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, #0000000d);
                        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
                        border-style: var(--tw-border-style) !important;
                        border-width: 1px;
                    }

                    .dark .grecaptcha-badge {
                        border-color: var(--input) !important;
                    }
                ` }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RecaptchaV3Style, {}),
        children
      ]
    }
  );
}
function RecaptchaV3Style() {
  const { executeRecaptcha } = _reactrecaptchav3.useGoogleReCaptcha.call(void 0, );
  const { theme } = useTheme();
  const { lang } = useLang();
  _react.useEffect.call(void 0, () => {
    if (!executeRecaptcha) return;
    const updateRecaptcha = async () => {
      const iframe = document.querySelector(
        "iframe[title='reCAPTCHA']"
      );
      if (iframe) {
        const iframeSrcUrl = new URL(iframe.src);
        iframeSrcUrl.searchParams.set("theme", theme);
        if (lang) iframeSrcUrl.searchParams.set("hl", lang);
        iframe.src = iframeSrcUrl.toString();
      }
    };
    updateRecaptcha();
  }, [executeRecaptcha, theme, lang]);
  return null;
}

// src/localization/admin-error-codes.ts
var ADMIN_ERROR_CODES = {
  FAILED_TO_CREATE_USER: "Failed to create user",
  USER_ALREADY_EXISTS: "User already exists",
  YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself",
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions",
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users",
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users",
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users",
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password",
  BANNED_USER: "You have been banned from this application"
};

// src/localization/anonymous-error-codes.ts
var ANONYMOUS_ERROR_CODES = {
  FAILED_TO_CREATE_USER: "Failed to create user",
  COULD_NOT_CREATE_SESSION: "Could not create session",
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "Anonymous users cannot sign in again anonymously"
};

// src/localization/api-key-error-codes.ts
var API_KEY_ERROR_CODES = {
  INVALID_METADATA_TYPE: "metadata must be an object or undefined",
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: "refillAmount is required when refillInterval is provided",
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: "refillInterval is required when refillAmount is provided",
  USER_BANNED: "User is banned",
  UNAUTHORIZED_SESSION: "Unauthorized or invalid session",
  KEY_NOT_FOUND: "API Key not found",
  KEY_DISABLED: "API Key is disabled",
  KEY_EXPIRED: "API Key has expired",
  USAGE_EXCEEDED: "API Key has reached its usage limit",
  KEY_NOT_RECOVERABLE: "API Key is not recoverable",
  EXPIRES_IN_IS_TOO_SMALL: "The expiresIn is smaller than the predefined minimum value.",
  EXPIRES_IN_IS_TOO_LARGE: "The expiresIn is larger than the predefined maximum value.",
  INVALID_REMAINING: "The remaining count is either too large or too small.",
  INVALID_PREFIX_LENGTH: "The prefix length is either too large or too small.",
  INVALID_NAME_LENGTH: "The name length is either too large or too small.",
  METADATA_DISABLED: "Metadata is disabled.",
  RATE_LIMIT_EXCEEDED: "Rate limit exceeded.",
  NO_VALUES_TO_UPDATE: "No values to update.",
  KEY_DISABLED_EXPIRATION: "Custom key expiration values are disabled.",
  INVALID_API_KEY: "Invalid API key.",
  INVALID_USER_ID_FROM_API_KEY: "The user id from the API key is invalid.",
  INVALID_API_KEY_GETTER_RETURN_TYPE: "API Key getter returned an invalid key type. Expected string.",
  SERVER_ONLY_PROPERTY: "The property you're trying to set can only be set from the server auth instance only."
};

// src/localization/base-error-codes.ts
var BASE_ERROR_CODES = {
  USER_NOT_FOUND: "User not found",
  FAILED_TO_CREATE_USER: "Failed to create user",
  FAILED_TO_CREATE_SESSION: "Failed to create session",
  FAILED_TO_UPDATE_USER: "Failed to update user",
  FAILED_TO_GET_SESSION: "Failed to get session",
  INVALID_PASSWORD: "Invalid password",
  INVALID_EMAIL: "Invalid email",
  INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Social account already linked",
  PROVIDER_NOT_FOUND: "Provider not found",
  INVALID_TOKEN: "Invalid token",
  ID_TOKEN_NOT_SUPPORTED: "id_token not supported",
  FAILED_TO_GET_USER_INFO: "Failed to get user info",
  USER_EMAIL_NOT_FOUND: "User email not found",
  EMAIL_NOT_VERIFIED: "Email not verified",
  PASSWORD_TOO_SHORT: "Password too short",
  PASSWORD_TOO_LONG: "Password too long",
  USER_ALREADY_EXISTS: "User already exists",
  EMAIL_CAN_NOT_BE_UPDATED: "Email can not be updated",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Credential account not found",
  SESSION_EXPIRED: "Session expired. Re-authenticate to perform this action.",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "You can't unlink your last account",
  ACCOUNT_NOT_FOUND: "Account not found",
  USER_ALREADY_HAS_PASSWORD: "User already has a password. Provide that to delete the account."
};

// src/localization/captcha-error-codes.ts
var EXTERNAL_ERROR_CODES = {
  VERIFICATION_FAILED: "Captcha verification failed",
  MISSING_RESPONSE: "Missing CAPTCHA response",
  UNKNOWN_ERROR: "Something went wrong"
};
var INTERNAL_ERROR_CODES = {
  MISSING_SECRET_KEY: "Missing secret key",
  SERVICE_UNAVAILABLE: "CAPTCHA service unavailable"
};
var CAPTCHA_ERROR_CODES = {
  ...EXTERNAL_ERROR_CODES,
  ...INTERNAL_ERROR_CODES
};

// src/localization/email-otp-error-codes.ts
var EMAIL_OTP_ERROR_CODES = {
  OTP_EXPIRED: "otp expired",
  INVALID_OTP: "Invalid OTP",
  INVALID_EMAIL: "Invalid email",
  USER_NOT_FOUND: "User not found",
  TOO_MANY_ATTEMPTS: "Too many attempts"
};

// src/localization/generic-oauth-error-codes.ts
var GENERIC_OAUTH_ERROR_CODES = {
  INVALID_OAUTH_CONFIGURATION: "Invalid OAuth configuration"
};

// src/localization/haveibeenpwned-error-codes.ts
var HAVEIBEENPWNED_ERROR_CODES = {
  PASSWORD_COMPROMISED: "The password you entered has been compromised. Please choose a different password."
};

// src/localization/multi-session-error-codes.ts
var MULTI_SESSION_ERROR_CODES = {
  INVALID_SESSION_TOKEN: "Invalid session token"
};

// src/localization/organization-error-codes.ts
var ORGANIZATION_ERROR_CODES = {
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION: "You are not allowed to create a new organization",
  YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS: "You have reached the maximum number of organizations",
  ORGANIZATION_ALREADY_EXISTS: "Organization already exists",
  ORGANIZATION_NOT_FOUND: "Organization not found",
  USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "User is not a member of the organization",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION: "You are not allowed to update this organization",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION: "You are not allowed to delete this organization",
  NO_ACTIVE_ORGANIZATION: "No active organization",
  USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION: "User is already a member of this organization",
  MEMBER_NOT_FOUND: "Member not found",
  ROLE_NOT_FOUND: "Role not found",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "You are not allowed to create a new team",
  TEAM_ALREADY_EXISTS: "Team already exists",
  TEAM_NOT_FOUND: "Team not found",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER: "You cannot leave the organization as the only owner",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "You are not allowed to delete this member",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION: "You are not allowed to invite users to this organization",
  USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION: "User is already invited to this organization",
  INVITATION_NOT_FOUND: "Invitation not found",
  YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "You are not the recipient of the invitation",
  YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION: "You are not allowed to cancel this invitation",
  INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION: "Inviter is no longer a member of the organization",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE: "you are not allowed to invite user with this role",
  FAILED_TO_RETRIEVE_INVITATION: "Failed to retrieve invitation",
  YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: "You have reached the maximum number of teams",
  UNABLE_TO_REMOVE_LAST_TEAM: "Unable to remove last team",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER: "You are not allowed to update this member",
  ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "Organization membership limit reached",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION: "You are not allowed to create teams in this organization",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION: "You are not allowed to delete teams in this organization",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: "You are not allowed to update this team",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "You are not allowed to delete this team",
  INVITATION_LIMIT_REACHED: "Invitation limit reached"
};

// src/localization/passkey-error-codes.ts
var PASSKEY_ERROR_CODES = {
  CHALLENGE_NOT_FOUND: "Challenge not found",
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: "You are not allowed to register this passkey",
  FAILED_TO_VERIFY_REGISTRATION: "Failed to verify registration",
  PASSKEY_NOT_FOUND: "Passkey not found",
  AUTHENTICATION_FAILED: "Authentication failed",
  UNABLE_TO_CREATE_SESSION: "Unable to create session",
  FAILED_TO_UPDATE_PASSKEY: "Failed to update passkey"
};

// src/localization/phone-number-error-codes.ts
var PHONE_NUMBER_ERROR_CODES = {
  INVALID_PHONE_NUMBER: "Invalid phone number",
  PHONE_NUMBER_EXIST: "Phone number already exists",
  INVALID_PHONE_NUMBER_OR_PASSWORD: "Invalid phone number or password",
  UNEXPECTED_ERROR: "Unexpected error",
  OTP_NOT_FOUND: "OTP not found",
  OTP_EXPIRED: "OTP expired",
  INVALID_OTP: "Invalid OTP",
  PHONE_NUMBER_NOT_VERIFIED: "Phone number not verified"
};

// src/localization/stripe-localization.ts
var STRIPE_ERROR_CODES = {
  SUBSCRIPTION_NOT_FOUND: "Subscription not found",
  SUBSCRIPTION_PLAN_NOT_FOUND: "Subscription plan not found",
  ALREADY_SUBSCRIBED_PLAN: "You're already subscribed to this plan",
  UNABLE_TO_CREATE_CUSTOMER: "Unable to create customer",
  FAILED_TO_FETCH_PLANS: "Failed to fetch plans",
  EMAIL_VERIFICATION_REQUIRED: "Email verification is required before you can subscribe to a plan",
  SUBSCRIPTION_NOT_ACTIVE: "Subscription is not active",
  SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION: "Subscription is not scheduled for cancellation"
};

// src/localization/two-factor-error-codes.ts
var TWO_FACTOR_ERROR_CODES = {
  OTP_NOT_ENABLED: "OTP not enabled",
  OTP_HAS_EXPIRED: "OTP has expired",
  TOTP_NOT_ENABLED: "TOTP not enabled",
  TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled",
  BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled",
  INVALID_BACKUP_CODE: "Invalid backup code",
  INVALID_CODE: "Invalid code",
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.",
  INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie"
};

// src/localization/username-error-codes.ts
var USERNAME_ERROR_CODES = {
  INVALID_USERNAME_OR_PASSWORD: "invalid username or password",
  EMAIL_NOT_VERIFIED: "email not verified",
  UNEXPECTED_ERROR: "unexpected error",
  USERNAME_IS_ALREADY_TAKEN: "username is already taken. please try another.",
  USERNAME_TOO_SHORT: "username is too short",
  USERNAME_TOO_LONG: "username is too long",
  INVALID_USERNAME: "username is invalid"
};

// src/localization/auth-localization.ts
var authLocalization = {
  /** @default "Account" */
  ACCOUNT: "Account",
  /** @default "Accounts" */
  ACCOUNTS: "Accounts",
  /** @default "Manage your currently signed in accounts." */
  ACCOUNTS_DESCRIPTION: "Switch between your currently signed in accounts.",
  /** @default "Sign in to an additional account." */
  ACCOUNTS_INSTRUCTIONS: "Sign in to an additional account.",
  /** @default "Add Account" */
  ADD_ACCOUNT: "Add Account",
  /** @default "Add Passkey" */
  ADD_PASSKEY: "Add Passkey",
  /** @default "Already have an account?" */
  ALREADY_HAVE_AN_ACCOUNT: "Already have an account?",
  /** @default "Avatar" */
  AVATAR: "Avatar",
  /** @default "Click on the avatar to upload a custom one from your files." */
  AVATAR_DESCRIPTION: "Click on the avatar to upload a custom one from your files.",
  /** @default "An avatar is optional but strongly recommended." */
  AVATAR_INSTRUCTIONS: "An avatar is optional but strongly recommended.",
  /** @default "Backup code is required" */
  BACKUP_CODE_REQUIRED: "Backup code is required",
  /** @default "Backup Codes" */
  BACKUP_CODES: "Backup Codes",
  /** @default "Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method." */
  BACKUP_CODES_DESCRIPTION: "Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method.",
  /** @default "Backup Code." */
  BACKUP_CODE_PLACEHOLDER: "Backup Code",
  /** @default "Backup Code" */
  BACKUP_CODE: "Backup Code",
  /** @default "Cancel" */
  CANCEL: "Cancel",
  /** @default "Change Password" */
  CHANGE_PASSWORD: "Change Password",
  /** @default "Enter your current password and a new password." */
  CHANGE_PASSWORD_DESCRIPTION: "Enter your current password and a new password.",
  /** @default "Please use 8 characters at minimum." */
  CHANGE_PASSWORD_INSTRUCTIONS: "Please use 8 characters at minimum.",
  /** @default "Your password has been changed." */
  CHANGE_PASSWORD_SUCCESS: "Your password has been changed.",
  /** @default "Confirm Password" */
  CONFIRM_PASSWORD: "Confirm Password",
  /** @default "Confirm Password" */
  CONFIRM_PASSWORD_PLACEHOLDER: "Confirm Password",
  /** @default "Confirm password is required" */
  CONFIRM_PASSWORD_REQUIRED: "Confirm password is required",
  /** @default "Continue with Authenticator" */
  CONTINUE_WITH_AUTHENTICATOR: "Continue with Authenticator",
  /** @default "Copied to clipboard" */
  COPIED_TO_CLIPBOARD: "Copied to clipboard",
  /** @default "Copy to clipboard" */
  COPY_TO_CLIPBOARD: "Copy to clipboard",
  /** @default "Copy all codes" */
  COPY_ALL_CODES: "Copy all codes",
  /** @default "Continue" */
  CONTINUE: "Continue",
  /** @default "Current Password" */
  CURRENT_PASSWORD: "Current Password",
  /** @default "Current Password" */
  CURRENT_PASSWORD_PLACEHOLDER: "Current Password",
  /** @default "Current Session" */
  CURRENT_SESSION: "Current Session",
  /** @default "Delete" */
  DELETE: "Delete",
  /** @default "Delete Avatar" */
  DELETE_AVATAR: "Delete Avatar",
  /** @default "Delete Account" */
  DELETE_ACCOUNT: "Delete Account",
  /** @default "Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution." */
  DELETE_ACCOUNT_DESCRIPTION: "Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution.",
  /** @default "Please confirm the deletion of your account. This action is not reversible, so please continue with caution." */
  DELETE_ACCOUNT_INSTRUCTIONS: "Please confirm the deletion of your account. This action is not reversible, so please continue with caution.",
  /** @default "Please check your email to verify the deletion of your account." */
  DELETE_ACCOUNT_VERIFY: "Please check your email to verify the deletion of your account.",
  /** @default "Your account has been deleted." */
  DELETE_ACCOUNT_SUCCESS: "Your account has been deleted.",
  /** @default "Disable Two-Factor" */
  DISABLE_TWO_FACTOR: "Disable Two-Factor",
  /** @default "Choose a provider to login to your account" */
  DISABLED_CREDENTIALS_DESCRIPTION: "Choose a provider to login to your account",
  /** @default "Don't have an account?" */
  DONT_HAVE_AN_ACCOUNT: "Don't have an account?",
  /** @default "Done" */
  DONE: "Done",
  /** @default "Email" */
  EMAIL: "Email",
  /** @default "Enter the email address you want to use to log in." */
  EMAIL_DESCRIPTION: "Enter the email address you want to use to log in.",
  /** @default "Please enter a valid email address." */
  EMAIL_INSTRUCTIONS: "Please enter a valid email address.",
  /** @default "Email is the same" */
  EMAIL_IS_THE_SAME: "Email is the same",
  /** @default "m@example.com" */
  EMAIL_PLACEHOLDER: "m@example.com",
  /** @default "Email address is required" */
  EMAIL_REQUIRED: "Email address is required",
  /** @default "Please check your email to verify the change." */
  EMAIL_VERIFY_CHANGE: "Please check your email to verify the change.",
  /** @default "Please check your email for the verification link." */
  EMAIL_VERIFICATION: "Please check your email for the verification link.",
  /** @default "Enable Two-Factor" */
  ENABLE_TWO_FACTOR: "Enable Two-Factor",
  /** @default "is invalid" */
  IS_INVALID: "is invalid",
  /** @default "is required" */
  IS_REQUIRED: "is required",
  /** @default "is the same" */
  IS_THE_SAME: "is the same",
  /** @default "Forgot authenticator?" */
  FORGOT_AUTHENTICATOR: "Forgot authenticator?",
  /** @default "Forgot Password" */
  FORGOT_PASSWORD: "Forgot Password",
  /** @default "Send reset link" */
  FORGOT_PASSWORD_ACTION: "Send reset link",
  /** @default "Enter your email to reset your password" */
  FORGOT_PASSWORD_DESCRIPTION: "Enter your email to reset your password",
  /** @default "Check your email for the password reset link." */
  FORGOT_PASSWORD_EMAIL: "Check your email for the password reset link.",
  /** @default "Forgot your password?" */
  FORGOT_PASSWORD_LINK: "Forgot your password?",
  /** @default "Link" */
  LINK: "Link",
  /** @default "Magic Link" */
  MAGIC_LINK: "Magic Link",
  /** @default "Send magic link" */
  MAGIC_LINK_ACTION: "Send magic link",
  /** @default "Enter your email to receive a magic link" */
  MAGIC_LINK_DESCRIPTION: "Enter your email to receive a magic link",
  /** @default "Check your email for the magic link" */
  MAGIC_LINK_EMAIL: "Check your email for the magic link",
  /** @default "Email Code" */
  EMAIL_OTP: "Email Code",
  /** @default "Send code" */
  EMAIL_OTP_SEND_ACTION: "Send code",
  /** @default "Verify code" */
  EMAIL_OTP_VERIFY_ACTION: "Verify code",
  /** @default "Enter your email to receive a code" */
  EMAIL_OTP_DESCRIPTION: "Enter your email to receive a code",
  /** @default "Please check your email for the verification code." */
  EMAIL_OTP_VERIFICATION_SENT: "Please check your email for the verification code.",
  /** @default "Name" */
  NAME: "Name",
  /** @default "Please enter your full name, or a display name." */
  NAME_DESCRIPTION: "Please enter your full name, or a display name.",
  /** @default "Please use 32 characters at maximum." */
  NAME_INSTRUCTIONS: "Please use 32 characters at maximum.",
  /** @default "Name" */
  NAME_PLACEHOLDER: "Name",
  /** @default "New Password" */
  NEW_PASSWORD: "New Password",
  /** @default "New Password" */
  NEW_PASSWORD_PLACEHOLDER: "New Password",
  /** @default "New password is required" */
  NEW_PASSWORD_REQUIRED: "New password is required",
  /** @default "One-Time Password" */
  ONE_TIME_PASSWORD: "One-Time Password",
  /** @default "Or continue with" */
  OR_CONTINUE_WITH: "Or continue with",
  /** @default "Passkey" */
  PASSKEY: "Passkey",
  /** @default "Passkeys" */
  PASSKEYS: "Passkeys",
  /** @default "Manage your passkeys for secure access." */
  PASSKEYS_DESCRIPTION: "Manage your passkeys for secure access.",
  /** @default "Securely access your account without a password." */
  PASSKEYS_INSTRUCTIONS: "Securely access your account without a password.",
  /** @default "Personal Account" */
  PERSONAL_ACCOUNT: "Personal Account",
  /** @default "API Keys" */
  API_KEYS: "API Keys",
  /** @default "Manage your API keys for secure access." */
  API_KEYS_DESCRIPTION: "Manage your API keys for secure access.",
  /** @default "Generate API keys to access your account programmatically." */
  API_KEYS_INSTRUCTIONS: "Generate API keys to access your account programmatically.",
  /** @default "Create API Key" */
  CREATE_API_KEY: "Create API Key",
  /** @default "Enter a unique name for your API key to differentiate it from other keys." */
  CREATE_API_KEY_DESCRIPTION: "Enter a unique name for your API key to differentiate it from other keys.",
  /** @default "New API Key" */
  API_KEY_NAME_PLACEHOLDER: "New API Key",
  /** @default "API Key Created" */
  API_KEY_CREATED: "API Key Created",
  /** @default "Please copy your API key and store it in a safe place. For security reasons we cannot show it again." */
  CREATE_API_KEY_SUCCESS: "Please copy your API key and store it in a safe place. For security reasons we cannot show it again.",
  /** @default "Never Expires" */
  NEVER_EXPIRES: "Never Expires",
  /** @default "Expires" */
  EXPIRES: "Expires",
  /** @default "No Expiration" */
  NO_EXPIRATION: "No Expiration",
  /** @default "Create Organization" */
  CREATE_ORGANIZATION: "Create Organization",
  /** @default "Organization" */
  ORGANIZATION: "Organization",
  /** @default "Name" */
  ORGANIZATION_NAME: "Name",
  /** @default "Acme Inc." */
  ORGANIZATION_NAME_PLACEHOLDER: "Acme Inc.",
  /** @default "This is your organization's visible name." */
  ORGANIZATION_NAME_DESCRIPTION: "This is your organization's visible name.",
  /** @default "Please use 32 characters at maximum." */
  ORGANIZATION_NAME_INSTRUCTIONS: "Please use 32 characters at maximum.",
  /** @default "Slug URL" */
  ORGANIZATION_SLUG: "Slug URL",
  /** @default "This is your organization's URL namespace." */
  ORGANIZATION_SLUG_DESCRIPTION: "This is your organization's URL namespace.",
  /** @default "Please use 48 characters at maximum." */
  ORGANIZATION_SLUG_INSTRUCTIONS: "Please use 48 characters at maximum.",
  /** @default "acme-inc" */
  ORGANIZATION_SLUG_PLACEHOLDER: "acme-inc",
  /** @default "Organization created successfully" */
  CREATE_ORGANIZATION_SUCCESS: "Organization created successfully",
  /** @default "Password" */
  PASSWORD: "Password",
  /** @default "Password" */
  PASSWORD_PLACEHOLDER: "Password",
  /** @default "Password is required" */
  PASSWORD_REQUIRED: "Password is required",
  /** @default "Passwords do not match" */
  PASSWORDS_DO_NOT_MATCH: "Passwords do not match",
  /** @default "Providers" */
  PROVIDERS: "Providers",
  /** @default "Connect your account with a third-party service." */
  PROVIDERS_DESCRIPTION: "Connect your account with a third-party service.",
  /** @default "Recover Account" */
  RECOVER_ACCOUNT: "Recover Account",
  /** @default "Recover account" */
  RECOVER_ACCOUNT_ACTION: "Recover account",
  /** @default "Please enter a backup code to access your account" */
  RECOVER_ACCOUNT_DESCRIPTION: "Please enter a backup code to access your account",
  /** @default "Remember me" */
  REMEMBER_ME: "Remember me",
  /** @default "Resend code" */
  RESEND_CODE: "Resend code",
  /** @default "Resend verification email" */
  RESEND_VERIFICATION_EMAIL: "Resend Verification Email",
  /** @default "Reset Password" */
  RESET_PASSWORD: "Reset Password",
  /** @default "Save new password" */
  RESET_PASSWORD_ACTION: "Save new password",
  /** @default "Enter your new password below" */
  RESET_PASSWORD_DESCRIPTION: "Enter your new password below",
  /** @default "Password reset successfully" */
  RESET_PASSWORD_SUCCESS: "Password reset successfully",
  /** @default "Request failed" */
  REQUEST_FAILED: "Request failed",
  /** @default "Revoke" */
  REVOKE: "Revoke",
  /** @default "Delete API Key" */
  DELETE_API_KEY: "Delete API Key",
  /** @default "Are you sure you want to delete this API key?" */
  DELETE_API_KEY_CONFIRM: "Are you sure you want to delete this API key?",
  /** @default "API Key" */
  API_KEY: "API Key",
  /** @default "Sign In" */
  SIGN_IN: "Sign In",
  /** @default "Login" */
  SIGN_IN_ACTION: "Login",
  /** @default "Enter your email below to login to your account" */
  SIGN_IN_DESCRIPTION: "Enter your email below to login to your account",
  /** @default "Enter your username or email below to login to your account" */
  SIGN_IN_USERNAME_DESCRIPTION: "Enter your username or email to login to your account",
  /** @default "Sign in with" */
  SIGN_IN_WITH: "Sign in with",
  /** @default "Sign Out" */
  SIGN_OUT: "Sign Out",
  /** @default "Sign Up" */
  SIGN_UP: "Sign Up",
  /** @default "Create an account" */
  SIGN_UP_ACTION: "Create an account",
  /** @default "Enter your information to create an account" */
  SIGN_UP_DESCRIPTION: "Enter your information to create an account",
  /** @default "Check your email for the verification link." */
  SIGN_UP_EMAIL: "Check your email for the verification link.",
  /** @default "Sessions" */
  SESSIONS: "Sessions",
  /** @default "Manage your active sessions and revoke access." */
  SESSIONS_DESCRIPTION: "Manage your active sessions and revoke access.",
  /** @default "Set Password" */
  SET_PASSWORD: "Set Password",
  /** @default "Click the button below to receive an email to set up a password for your account." */
  SET_PASSWORD_DESCRIPTION: "Click the button below to receive an email to set up a password for your account.",
  /** @default "Settings" */
  SETTINGS: "Settings",
  /** @default "Save" */
  SAVE: "Save",
  /** @default "Security" */
  SECURITY: "Security",
  /** @default "Switch Account" */
  SWITCH_ACCOUNT: "Switch Account",
  /** @default "Trust this device" */
  TRUST_DEVICE: "Trust this device",
  /** @default "Two-Factor" */
  TWO_FACTOR: "Two-Factor",
  /** @default "Verify code" */
  TWO_FACTOR_ACTION: "Verify code",
  /** @default "Please enter your one-time password to continue" */
  TWO_FACTOR_DESCRIPTION: "Please enter your one-time password to continue",
  /** @default "Add an extra layer of security to your account." */
  TWO_FACTOR_CARD_DESCRIPTION: "Add an extra layer of security to your account.",
  /** @default "Please enter your password to disable 2FA." */
  TWO_FACTOR_DISABLE_INSTRUCTIONS: "Please enter your password to disable 2FA.",
  /** @default "Please enter your password to enable 2FA" */
  TWO_FACTOR_ENABLE_INSTRUCTIONS: "Please enter your password to enable 2FA.",
  /** @default "Two-factor authentication has been enabled" */
  TWO_FACTOR_ENABLED: "Two-factor authentication has been enabled",
  /** @default "Two-Factor Authentication has been disabled" */
  TWO_FACTOR_DISABLED: "Two-Factor Authentication has been disabled",
  /** @default "Two-Factor Authentication" */
  TWO_FACTOR_PROMPT: "Two-Factor Authentication",
  /** @default "Scan the QR Code with your Authenticator" */
  TWO_FACTOR_TOTP_LABEL: "Scan the QR Code with your Authenticator",
  /** @default "Send verification code" */
  SEND_VERIFICATION_CODE: "Send verification code",
  /** @default "Unlink" */
  UNLINK: "Unlink",
  /** @default "Updated successfully" */
  UPDATED_SUCCESSFULLY: "updated successfully",
  /** @default "Username" */
  USERNAME: "Username",
  /** @default "Enter the username you want to use to log in." */
  USERNAME_DESCRIPTION: "Enter the username you want to use to log in.",
  /** @default "Please use 32 characters at maximum." */
  USERNAME_INSTRUCTIONS: "Please use 32 characters at maximum.",
  /** @default "Username" */
  USERNAME_PLACEHOLDER: "Username",
  /** @default "Username or email" */
  SIGN_IN_USERNAME_PLACEHOLDER: "Username or email",
  /** @default "Verify Your Email" */
  VERIFY_YOUR_EMAIL: "Verify Your Email",
  /** @default "Please verify your email address. Check your inbox for the verification email. If you haven't received the email, click the button below to resend." */
  VERIFY_YOUR_EMAIL_DESCRIPTION: "Please verify your email address. Check your inbox for the verification email. If you haven't received the email, click the button below to resend.",
  /** @default "Go back" */
  GO_BACK: "Go back",
  /** @default "Your session is not fresh. Please sign in again." */
  SESSION_NOT_FRESH: "Your session is not fresh. Please sign in again.",
  /** @default "Upload Avatar" */
  UPLOAD_AVATAR: "Upload Avatar",
  /** @default "Logo" */
  LOGO: "Logo",
  /** @default "Click on the logo to upload a custom one from your files." */
  LOGO_DESCRIPTION: "Click on the logo to upload a custom one from your files.",
  /** @default "A logo is optional but strongly recommended." */
  LOGO_INSTRUCTIONS: "A logo is optional but strongly recommended.",
  /** @default "Upload" */
  UPLOAD: "Upload",
  /** @default "Upload Logo" */
  UPLOAD_LOGO: "Upload Logo",
  /** @default "Delete Logo" */
  DELETE_LOGO: "Delete Logo",
  /** @default "Privacy Policy" */
  PRIVACY_POLICY: "Privacy Policy",
  /** @default "Terms of Service" */
  TERMS_OF_SERVICE: "Terms of Service",
  /** @default "This site is protected by reCAPTCHA." */
  PROTECTED_BY_RECAPTCHA: "This site is protected by reCAPTCHA.",
  /** @default "By continuing, you agree to the" */
  BY_CONTINUING_YOU_AGREE: "By continuing, you agree to the",
  /** @default "User" */
  USER: "User",
  /** @default "Organizations" */
  ORGANIZATIONS: "Organizations",
  /** @default "Manage your organizations and memberships." */
  ORGANIZATIONS_DESCRIPTION: "Manage your organizations and memberships.",
  /** @default "Create an organization to collaborate with other users." */
  ORGANIZATIONS_INSTRUCTIONS: "Create an organization to collaborate with other users.",
  /** @default "Leave Organization" */
  LEAVE_ORGANIZATION: "Leave Organization",
  /** @default "Are you sure you want to leave this organization?" */
  LEAVE_ORGANIZATION_CONFIRM: "Are you sure you want to leave this organization?",
  /** @default "You have successfully left the organization." */
  LEAVE_ORGANIZATION_SUCCESS: "You have successfully left the organization.",
  /** @default "Manage Organization" */
  MANAGE_ORGANIZATION: "Manage Organization",
  /** @default "Remove Member" */
  REMOVE_MEMBER: "Remove Member",
  /** @default "Are you sure you want to remove this member from the organization?" */
  REMOVE_MEMBER_CONFIRM: "Are you sure you want to remove this member from the organization?",
  /** @default "Member removed successfully" */
  REMOVE_MEMBER_SUCCESS: "Member removed successfully",
  /** @default "Invite Member" */
  INVITE_MEMBER: "Invite Member",
  /** @default "Members" */
  MEMBERS: "Members",
  /** @default "Add or remove members and manage their roles." */
  MEMBERS_DESCRIPTION: "Add or remove members and manage their roles.",
  /** @default "Invite new members to your organization." */
  MEMBERS_INSTRUCTIONS: "Invite new members to your organization.",
  /** @default "Send an invitation to add a new member to your organization." */
  INVITE_MEMBER_DESCRIPTION: "Send an invitation to add a new member to your organization.",
  /** @default "Role" */
  ROLE: "Role",
  /** @default "Select a role" */
  SELECT_ROLE: "Select a role",
  /** @default "Admin" */
  ADMIN: "Admin",
  /** @default "Member" */
  MEMBER: "Member",
  /** @default "Guest" */
  GUEST: "Guest",
  /** @default "Owner" */
  OWNER: "Owner",
  /** @default "Update the role for this member" */
  UPDATE_ROLE_DESCRIPTION: "Update the role for this member",
  /** @default "Update Role" */
  UPDATE_ROLE: "Update Role",
  /** @default "Member role updated successfully" */
  MEMBER_ROLE_UPDATED: "Member role updated successfully",
  /** @default "Send Invitation" */
  SEND_INVITATION: "Send Invitation",
  /** @default "Invitation sent successfully" */
  SEND_INVITATION_SUCCESS: "Invitation sent successfully",
  /** @default "Pending Invitations" */
  PENDING_INVITATIONS: "Pending Invitations",
  /** @default "Manage pending invitations to your organization." */
  PENDING_INVITATIONS_DESCRIPTION: "Manage pending invitations to your organization.",
  /** @default "Cancel Invitation" */
  CANCEL_INVITATION: "Cancel Invitation",
  /** @default "Invitation cancelled successfully" */
  INVITATION_CANCELLED: "Invitation cancelled successfully",
  /** @default "Accept Invitation" */
  ACCEPT_INVITATION: "Accept Invitation",
  /** @default "You have been invited to join an organization." */
  ACCEPT_INVITATION_DESCRIPTION: "You have been invited to join an organization.",
  /** @default "Invitation accepted successfully" */
  INVITATION_ACCEPTED: "Invitation accepted successfully",
  /** @default "Invitation rejected successfully" */
  INVITATION_REJECTED: "Invitation rejected successfully",
  /** @default "Accept" */
  ACCEPT: "Accept",
  /** @default "Reject" */
  REJECT: "Reject",
  /** @default "This invitation has expired" */
  INVITATION_EXPIRED: "This invitation has expired",
  /** @default "Delete Organization" */
  DELETE_ORGANIZATION: "Delete Organization",
  /** @default "Permanently remove your organization and all of its contents. This action is not reversible — please continue with caution." */
  DELETE_ORGANIZATION_DESCRIPTION: "Permanently remove your organization and all of its contents. This action is not reversible \u2014 please continue with caution.",
  /** @default "Organization deleted successfully" */
  DELETE_ORGANIZATION_SUCCESS: "Organization deleted successfully",
  /** @default "Enter the organization slug to continue:" */
  DELETE_ORGANIZATION_INSTRUCTIONS: "Enter the organization slug to continue:",
  /** @default "Organization slug is required" */
  SLUG_REQUIRED: "Organization slug is required",
  /** @default "The slug does not match" */
  SLUG_DOES_NOT_MATCH: "The slug does not match",
  ...BASE_ERROR_CODES,
  ...ADMIN_ERROR_CODES,
  ...ANONYMOUS_ERROR_CODES,
  ...API_KEY_ERROR_CODES,
  ...CAPTCHA_ERROR_CODES,
  ...EMAIL_OTP_ERROR_CODES,
  ...GENERIC_OAUTH_ERROR_CODES,
  ...HAVEIBEENPWNED_ERROR_CODES,
  ...MULTI_SESSION_ERROR_CODES,
  ...ORGANIZATION_ERROR_CODES,
  ...PASSKEY_ERROR_CODES,
  ...PHONE_NUMBER_ERROR_CODES,
  ...STRIPE_ERROR_CODES,
  ...TWO_FACTOR_ERROR_CODES,
  ...USERNAME_ERROR_CODES
};

// src/components/ui/alert.tsx
var _classvarianceauthority = require('class-variance-authority');

var alertVariants = _classvarianceauthority.cva.call(void 0, 
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "alert-title",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "alert-description",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/avatar.tsx
var _reactavatar = require('@radix-ui/react-avatar'); var AvatarPrimitive = _interopRequireWildcard(_reactavatar);

function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/button.tsx
var _reactslot = require('@radix-ui/react-slot');


var buttonVariants = _classvarianceauthority.cva.call(void 0, 
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? _reactslot.Slot : "button";
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Comp,
    {
      "data-slot": "button",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/card.tsx

function Card({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card-header",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card-title",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card-description",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card-action",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card-content",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "card-footer",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/components/ui/checkbox.tsx
var _reactcheckbox = require('@radix-ui/react-checkbox'); var CheckboxPrimitive = _interopRequireWildcard(_reactcheckbox);
var _lucidereact = require('lucide-react');

function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/components/ui/dialog.tsx
var _reactdialog = require('@radix-ui/react-dialog'); var DialogPrimitive = _interopRequireWildcard(_reactdialog);


function Dialog({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogOverlay, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.XIcon, {}),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "dialog-header",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "dialog-footer",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/drawer.tsx
var _vaul = require('vaul');

function Drawer({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _vaul.Drawer.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _vaul.Drawer.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _vaul.Drawer.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _vaul.Drawer.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _vaul.Drawer.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerOverlay, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      _vaul.Drawer.Content,
      {
        "data-slot": "drawer-content",
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "drawer-header",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "drawer-footer",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _vaul.Drawer.Title,
    {
      "data-slot": "drawer-title",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-foreground font-semibold", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _vaul.Drawer.Description,
    {
      "data-slot": "drawer-description",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.tsx
var _reactdropdownmenu = require('@radix-ui/react-dropdown-menu'); var DropdownMenuPrimitive = _interopRequireWildcard(_reactdropdownmenu);


function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/form.tsx







var _reacthookform = require('react-hook-form');

// src/components/ui/label.tsx
var _reactlabel = require('@radix-ui/react-label'); var LabelPrimitive = _interopRequireWildcard(_reactlabel);

function Label2({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/form.tsx

var Form = _reacthookform.FormProvider;
var FormFieldContext = React.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _reacthookform.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = _reacthookform.useFormContext.call(void 0, );
  const formState = _reacthookform.useFormState.call(void 0, { name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "form-item",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Label2,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _reactslot.Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(_nullishCoalesce((error == null ? void 0 : error.message), () => ( ""))) : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}

// src/components/ui/input.tsx

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "input",
    {
      type,
      "data-slot": "input",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input-otp.tsx

var _inputotp = require('input-otp');


function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _inputotp.OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "input-otp-group",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React2.useContext(_inputotp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = _nullishCoalesce((inputOTPContext == null ? void 0 : inputOTPContext.slots[index]), () => ( {}));
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.MinusIcon, {}) });
}

// src/components/ui/select.tsx
var _reactselect = require('@radix-ui/react-select'); var SelectPrimitive = _interopRequireWildcard(_reactselect);


function Select({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectScrollUpButton, {}),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SelectPrimitive.Viewport,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/components/ui/separator.tsx
var _reactseparator = require('@radix-ui/react-separator'); var SeparatorPrimitive = _interopRequireWildcard(_reactseparator);

function Separator3({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/skeleton.tsx

function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "skeleton",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/components/ui/tabs.tsx
var _reacttabs = require('@radix-ui/react-tabs'); var TabsPrimitive = _interopRequireWildcard(_reacttabs);

function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex-1 outline-none", className),
      ...props
    }
  );
}

// src/components/ui/default-components.ts
var defaultComponents = {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label: Label2,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator: Separator3,
  Skeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
};

// src/lib/auth-ui-provider.tsx

var DefaultLink = ({ href, className, children }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { className, href, children });
var defaultNavigate = (href) => {
  window.location.href = href;
};
var defaultReplace = (href) => {
  window.location.replace(href);
};
var defaultToast = ({ variant = "default", message }) => {
  if (variant === "default") {
    _sonner.toast.call(void 0, message);
  } else {
    _sonner.toast[variant](message);
  }
};
var AuthUIContext = _react.createContext.call(void 0, 
  {}
);
var AuthUIProvider = ({
  children,
  authClient: authClientProp,
  components: componentsProp,
  avatar: avatarProp,
  settings: settingsProp,
  settingsFields,
  settingsURL,
  avatarExtension,
  avatarSize,
  deleteUser: deleteUserProp,
  deleteAccountVerification,
  social: socialProp,
  genericOAuth: genericOAuthProp,
  providers,
  otherProviders,
  signInSocial,
  basePath = "/auth",
  baseURL = "",
  captcha,
  redirectTo = "/",
  credentials: credentialsProp,
  confirmPassword,
  forgotPassword,
  passwordValidation,
  rememberMe,
  username,
  changeEmail = true,
  freshAge = 60 * 60 * 24,
  hooks: hooksProp,
  mutators: mutatorsProp,
  localization: localizationProp,
  nameRequired = true,
  organization: organizationProp,
  signUp: signUpProp = true,
  signUpFields,
  toast: toast2 = defaultToast,
  viewPaths: viewPathsProp,
  navigate,
  replace,
  uploadAvatar,
  Link = DefaultLink,
  ...props
}) => {
  _react.useEffect.call(void 0, () => {
    if (uploadAvatar !== void 0) {
      console.warn(
        "[Better Auth UI] uploadAvatar is deprecated, use avatar.upload instead"
      );
    }
    if (avatarExtension !== void 0) {
      console.warn(
        "[Better Auth UI] avatarExtension is deprecated, use avatar.extension instead"
      );
    }
    if (avatarSize !== void 0) {
      console.warn(
        "[Better Auth UI] avatarSize is deprecated, use avatar.size instead"
      );
    }
    if (settingsFields !== void 0) {
      console.warn(
        "[Better Auth UI] settingsFields is deprecated, use settings.fields instead"
      );
    }
    if (settingsURL !== void 0) {
      console.warn(
        "[Better Auth UI] settingsURL is deprecated, use settings.url instead"
      );
    }
    if (deleteAccountVerification !== void 0) {
      console.warn(
        "[Better Auth UI] deleteAccountVerification is deprecated, use deleteUser.verification instead"
      );
    }
    if (providers !== void 0) {
      console.warn(
        "[Better Auth UI] providers is deprecated, use social.providers instead"
      );
    }
    if (otherProviders !== void 0) {
      console.warn(
        "[Better Auth UI] otherProviders is deprecated, use genericOAuth.providers instead"
      );
    }
    if (signInSocial !== void 0) {
      console.warn(
        "[Better Auth UI] signInSocial is deprecated, use social.signIn instead"
      );
    }
    if (confirmPassword !== void 0) {
      console.warn(
        "[Better Auth UI] confirmPassword is deprecated, use credentials.confirmPassword instead"
      );
    }
    if (forgotPassword !== void 0) {
      console.warn(
        "[Better Auth UI] forgotPassword is deprecated, use credentials.forgotPassword instead"
      );
    }
    if (passwordValidation !== void 0) {
      console.warn(
        "[Better Auth UI] passwordValidation is deprecated, use credentials.passwordValidation instead"
      );
    }
    if (rememberMe !== void 0) {
      console.warn(
        "[Better Auth UI] rememberMe is deprecated, use credentials.rememberMe instead"
      );
    }
    if (username !== void 0) {
      console.warn(
        "[Better Auth UI] username is deprecated, use credentials.username instead"
      );
    }
    if (signUpFields !== void 0) {
      console.warn(
        "[Better Auth UI] signUpFields is deprecated, use signUp.fields instead"
      );
    }
  }, [
    uploadAvatar,
    avatarExtension,
    avatarSize,
    settingsFields,
    settingsURL,
    deleteAccountVerification,
    providers,
    otherProviders,
    signInSocial,
    confirmPassword,
    forgotPassword,
    passwordValidation,
    rememberMe,
    username,
    signUpFields
  ]);
  const authClient = authClientProp;
  const components = _react.useMemo.call(void 0, 
    () => ({
      ...defaultComponents,
      ...componentsProp
    }),
    [componentsProp]
  );
  const avatar = _react.useMemo.call(void 0, () => {
    if (!avatarProp) return;
    if (avatarProp === true) {
      return {
        extension: avatarExtension || "png",
        size: avatarSize || (uploadAvatar ? 256 : 128),
        upload: uploadAvatar
      };
    }
    return {
      upload: avatarProp.upload || uploadAvatar,
      extension: avatarProp.extension || avatarExtension || "png",
      size: avatarProp.size || (avatarProp.upload ? 256 : 128)
    };
  }, [avatarProp, avatarExtension, avatarSize, uploadAvatar]);
  const settings = _react.useMemo.call(void 0, () => {
    var _a;
    if (settingsProp === false) return;
    if (settingsProp === true || settingsProp === void 0) {
      return {
        url: settingsURL,
        fields: settingsFields || ["image", "name"]
      };
    }
    const basePath2 = ((_a = settingsProp.basePath) == null ? void 0 : _a.endsWith("/")) ? settingsProp.basePath.slice(0, -1) : settingsProp.basePath;
    return {
      url: settingsProp.url,
      basePath: basePath2,
      fields: settingsProp.fields || ["image", "name"]
    };
  }, [settingsProp, settingsFields, settingsURL]);
  const deleteUser = _react.useMemo.call(void 0, () => {
    if (!deleteUserProp) return;
    if (deleteUserProp === true) {
      return {
        verification: deleteAccountVerification
      };
    }
    return deleteUserProp;
  }, [deleteUserProp, deleteAccountVerification]);
  const social = _react.useMemo.call(void 0, () => {
    if (!socialProp && !providers) return;
    if (providers) {
      return {
        providers,
        signIn: signInSocial
      };
    }
    return socialProp;
  }, [socialProp, providers, signInSocial]);
  const genericOAuth = _react.useMemo.call(void 0, () => {
    if (!genericOAuthProp && !otherProviders) return;
    if (otherProviders) {
      return {
        providers: otherProviders
      };
    }
    return genericOAuthProp;
  }, [genericOAuthProp, otherProviders]);
  const credentials = _react.useMemo.call(void 0, () => {
    if (credentialsProp === false) return;
    if (credentialsProp === true) {
      return {
        confirmPassword,
        forgotPassword: _nullishCoalesce(forgotPassword, () => ( true)),
        passwordValidation,
        rememberMe,
        username
      };
    }
    return {
      confirmPassword: (credentialsProp == null ? void 0 : credentialsProp.confirmPassword) || confirmPassword,
      forgotPassword: _nullishCoalesce(((credentialsProp == null ? void 0 : credentialsProp.forgotPassword) || forgotPassword), () => ( true)),
      passwordValidation: (credentialsProp == null ? void 0 : credentialsProp.passwordValidation) || passwordValidation,
      rememberMe: (credentialsProp == null ? void 0 : credentialsProp.rememberMe) || rememberMe,
      username: (credentialsProp == null ? void 0 : credentialsProp.username) || username
    };
  }, [
    credentialsProp,
    confirmPassword,
    forgotPassword,
    passwordValidation,
    rememberMe,
    username
  ]);
  const signUp = _react.useMemo.call(void 0, () => {
    if (signUpProp === false) return;
    if (signUpProp === true || signUpProp === void 0) {
      return {
        fields: signUpFields || ["name"]
      };
    }
    return {
      fields: signUpProp.fields || signUpFields || ["name"]
    };
  }, [signUpProp, signUpFields]);
  const organization = _react.useMemo.call(void 0, () => {
    if (!organizationProp) return;
    if (organizationProp === true) {
      return {
        customRoles: []
      };
    }
    let logo;
    if (organizationProp.logo === true) {
      logo = {
        extension: "png",
        size: 128
      };
    } else if (organizationProp.logo) {
      logo = {
        upload: organizationProp.logo.upload,
        extension: organizationProp.logo.extension || "png",
        size: organizationProp.logo.size || organizationProp.logo.upload ? 256 : 128
      };
    }
    return {
      ...organizationProp,
      logo,
      customRoles: organizationProp.customRoles || []
    };
  }, [organizationProp]);
  const defaultMutators = _react.useMemo.call(void 0, () => {
    return {
      deleteApiKey: (params) => authClient.apiKey.delete({
        ...params,
        fetchOptions: { throw: true }
      }),
      deletePasskey: (params) => authClient.passkey.deletePasskey({
        ...params,
        fetchOptions: { throw: true }
      }),
      revokeDeviceSession: (params) => authClient.multiSession.revoke({
        ...params,
        fetchOptions: { throw: true }
      }),
      revokeSession: (params) => authClient.revokeSession({
        ...params,
        fetchOptions: { throw: true }
      }),
      setActiveSession: (params) => authClient.multiSession.setActive({
        ...params,
        fetchOptions: { throw: true }
      }),
      updateUser: (params) => authClient.updateUser({
        ...params,
        fetchOptions: { throw: true }
      }),
      unlinkAccount: (params) => authClient.unlinkAccount({
        ...params,
        fetchOptions: { throw: true }
      })
    };
  }, [authClient]);
  const defaultHooks = _react.useMemo.call(void 0, () => {
    return {
      useSession: authClient.useSession,
      useListAccounts: () => useAuthData({
        queryFn: authClient.listAccounts,
        cacheKey: "listAccounts"
      }),
      useListDeviceSessions: () => useAuthData({
        queryFn: authClient.multiSession.listDeviceSessions,
        cacheKey: "listDeviceSessions"
      }),
      useListSessions: () => useAuthData({
        queryFn: authClient.listSessions,
        cacheKey: "listSessions"
      }),
      useListPasskeys: authClient.useListPasskeys,
      useListApiKeys: () => useAuthData({
        queryFn: authClient.apiKey.list,
        cacheKey: "listApiKeys"
      }),
      useActiveOrganization: authClient.useActiveOrganization,
      useListOrganizations: authClient.useListOrganizations,
      useHasPermission: (params) => useAuthData({
        queryFn: () => authClient.organization.hasPermission(params),
        cacheKey: `hasPermission:${JSON.stringify(params)}`
      }),
      useInvitation: (params) => useAuthData({
        queryFn: () => authClient.organization.getInvitation(params),
        cacheKey: `invitation:${JSON.stringify(params)}`
      })
    };
  }, [authClient]);
  const viewPaths = _react.useMemo.call(void 0, () => {
    return { ..._chunkQB6CPTMTcjs.authViewPaths, ...viewPathsProp };
  }, [viewPathsProp]);
  const localization = _react.useMemo.call(void 0, () => {
    return { ...authLocalization, ...localizationProp };
  }, [localizationProp]);
  const hooks = _react.useMemo.call(void 0, () => {
    return { ...defaultHooks, ...hooksProp };
  }, [defaultHooks, hooksProp]);
  const mutators = _react.useMemo.call(void 0, () => {
    return { ...defaultMutators, ...mutatorsProp };
  }, [defaultMutators, mutatorsProp]);
  baseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  basePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const { data: sessionData } = hooks.useSession();
  const errorShown = _react.useRef.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    if (errorShown.current) return;
    const error = _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "error");
    if (error) {
      errorShown.current = true;
      console.log({ error });
      toast2({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }, [localization, toast2]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    AuthUIContext.Provider,
    {
      value: {
        authClient,
        components,
        avatar,
        basePath: basePath === "/" ? "" : basePath,
        baseURL,
        captcha,
        redirectTo,
        changeEmail,
        credentials,
        deleteUser,
        freshAge,
        genericOAuth,
        hooks,
        mutators,
        localization,
        nameRequired,
        organization,
        settings,
        signUp,
        social,
        toast: toast2,
        navigate: navigate || defaultNavigate,
        replace: replace || navigate || defaultReplace,
        viewPaths,
        Link,
        ...props
      },
      children: [
        sessionData && (hooks.useActiveOrganization === authClient.useActiveOrganization || hooks.useListOrganizations === authClient.useListOrganizations) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, OrganizationRefetcher, {}),
        (captcha == null ? void 0 : captcha.provider) === "google-recaptcha-v3" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RecaptchaV3, { children }) : children
      ]
    }
  );
};
var OrganizationRefetcher = () => {
  const { hooks } = _react.useContext.call(void 0, AuthUIContext);
  const { data: sessionData } = hooks.useSession();
  const { data: activeOrganization, refetch: refetchActiveOrganization } = hooks.useActiveOrganization();
  const { data: organizations, refetch: refetchListOrganizations } = hooks.useListOrganizations();
  _react.useEffect.call(void 0, () => {
    if (!(sessionData == null ? void 0 : sessionData.user.id)) return;
    if (activeOrganization) refetchActiveOrganization == null ? void 0 : refetchActiveOrganization();
    if (organizations) refetchListOrganizations == null ? void 0 : refetchListOrganizations();
  }, [
    sessionData == null ? void 0 : sessionData.user.id,
    refetchActiveOrganization,
    refetchListOrganizations
  ]);
  return null;
};

// src/hooks/use-auth-data.ts
function useAuthData({
  queryFn,
  cacheKey,
  staleTime = 1e4
  // Default 10 seconds
}) {
  var _a;
  const { authClient, toast: toast2, localization } = _react.useContext.call(void 0, AuthUIContext);
  const { data: sessionData, isPending: sessionPending } = authClient.useSession();
  const queryFnRef = _react.useRef.call(void 0, queryFn);
  queryFnRef.current = queryFn;
  const stableCacheKey = cacheKey || queryFn.toString();
  const cacheEntry = _react.useSyncExternalStore.call(void 0, 
    _react.useCallback.call(void 0, 
      (callback) => authDataCache.subscribe(stableCacheKey, callback),
      [stableCacheKey]
    ),
    _react.useCallback.call(void 0, 
      () => authDataCache.get(stableCacheKey),
      [stableCacheKey]
    ),
    _react.useCallback.call(void 0, 
      () => authDataCache.get(stableCacheKey),
      [stableCacheKey]
    )
  );
  const initialized = _react.useRef.call(void 0, false);
  const previousUserId = _react.useRef.call(void 0, void 0);
  const [error, setError] = _react.useState.call(void 0, null);
  const refetch = _react.useCallback.call(void 0, async () => {
    const existingRequest = authDataCache.getInFlightRequest(stableCacheKey);
    if (existingRequest) {
      try {
        const result = await existingRequest;
        if (result.error) {
          setError(result.error);
        } else {
          setError(null);
        }
      } catch (err) {
        setError(err);
      }
      return;
    }
    if ((cacheEntry == null ? void 0 : cacheEntry.data) !== void 0) {
      authDataCache.setRefetching(stableCacheKey, true);
    }
    const fetchPromise = queryFnRef.current();
    authDataCache.setInFlightRequest(stableCacheKey, fetchPromise);
    try {
      const { data, error: error2 } = await fetchPromise;
      if (error2) {
        setError(error2);
        toast2({
          variant: "error",
          message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error: error2, localization })
        });
      } else {
        setError(null);
      }
      authDataCache.set(stableCacheKey, data);
    } catch (err) {
      const error2 = err;
      setError(error2);
      toast2({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error: error2, localization })
      });
    } finally {
      authDataCache.setRefetching(stableCacheKey, false);
      authDataCache.removeInFlightRequest(stableCacheKey);
    }
  }, [stableCacheKey, toast2, localization, cacheEntry]);
  _react.useEffect.call(void 0, () => {
    var _a2;
    const currentUserId = (_a2 = sessionData == null ? void 0 : sessionData.user) == null ? void 0 : _a2.id;
    if (!sessionData) {
      authDataCache.setRefetching(stableCacheKey, false);
      authDataCache.clear(stableCacheKey);
      initialized.current = false;
      previousUserId.current = void 0;
      return;
    }
    const userIdChanged = previousUserId.current !== void 0 && previousUserId.current !== currentUserId;
    if (userIdChanged) {
      authDataCache.clear(stableCacheKey);
    }
    const hasCachedData = (cacheEntry == null ? void 0 : cacheEntry.data) !== void 0;
    const isStale = !cacheEntry || Date.now() - cacheEntry.timestamp > staleTime;
    if (!initialized.current || !hasCachedData || userIdChanged || hasCachedData && isStale) {
      if (!hasCachedData || isStale) {
        initialized.current = true;
        refetch();
      }
    }
    previousUserId.current = currentUserId;
  }, [
    sessionData,
    (_a = sessionData == null ? void 0 : sessionData.user) == null ? void 0 : _a.id,
    stableCacheKey,
    refetch,
    cacheEntry,
    staleTime
  ]);
  const isPending = sessionPending || !(cacheEntry == null ? void 0 : cacheEntry.data) && !error;
  return {
    data: _nullishCoalesce((cacheEntry == null ? void 0 : cacheEntry.data), () => ( null)),
    isPending,
    isRefetching: _nullishCoalesce((cacheEntry == null ? void 0 : cacheEntry.isRefetching), () => ( false)),
    error,
    refetch
  };
}











exports.useIsHydrated = useIsHydrated; exports.useLang = useLang; exports.useTheme = useTheme; exports.useAuthData = useAuthData; exports.authLocalization = authLocalization; exports.Form = Form; exports.defaultComponents = defaultComponents; exports.AuthUIContext = AuthUIContext; exports.AuthUIProvider = AuthUIProvider;
