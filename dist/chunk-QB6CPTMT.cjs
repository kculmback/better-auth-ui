"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }// src/lib/auth-view-paths.ts
var authViewPaths = {
  /** @default "accept-invitation" */
  ACCEPT_INVITATION: "accept-invitation",
  /** @default "api-keys" */
  API_KEYS: "api-keys",
  /** @default "callback" */
  CALLBACK: "callback",
  /** @default "email-otp" */
  EMAIL_OTP: "email-otp",
  /** @default "forgot-password" */
  FORGOT_PASSWORD: "forgot-password",
  /** @default "magic-link" */
  MAGIC_LINK: "magic-link",
  /** @default "members" */
  MEMBERS: "members",
  /** @default "organization" */
  ORGANIZATION: "organization",
  /** @default "organizations" */
  ORGANIZATIONS: "organizations",
  /** @default "recover-account" */
  RECOVER_ACCOUNT: "recover-account",
  /** @default "reset-password" */
  RESET_PASSWORD: "reset-password",
  /** @default "security" */
  SECURITY: "security",
  /** @default "settings" */
  SETTINGS: "settings",
  /** @default "sign-in" */
  SIGN_IN: "sign-in",
  /** @default "sign-out" */
  SIGN_OUT: "sign-out",
  /** @default "sign-up" */
  SIGN_UP: "sign-up",
  /** @default "two-factor" */
  TWO_FACTOR: "two-factor"
};

// src/lib/utils.ts
var _clsx = require('clsx');
var _tailwindmerge = require('tailwind-merge');
var _zod = require('zod'); var z = _interopRequireWildcard(_zod);
function cn(...inputs) {
  return _tailwindmerge.twMerge.call(void 0, _clsx.clsx.call(void 0, inputs));
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function getLocalizedError({
  error,
  localization
}) {
  if (typeof error === "string") {
    if (localization == null ? void 0 : localization[error])
      return localization[error];
  }
  if (error == null ? void 0 : error.error) {
    if (error.error.code) {
      const errorCode = error.error.code;
      if (localization == null ? void 0 : localization[errorCode]) return localization[errorCode];
    }
    return error.error.message || error.error.code || error.error.statusText || (localization == null ? void 0 : localization.REQUEST_FAILED);
  }
  return (error == null ? void 0 : error.message) || (localization == null ? void 0 : localization.REQUEST_FAILED) || "Request failed";
}
function getSearchParam(paramName) {
  return typeof window !== "undefined" ? new URLSearchParams(window.location.search).get(paramName) : null;
}
function getAuthViewByPath(authViewPaths2, path) {
  for (const authViewPathsKey in authViewPaths2) {
    if (authViewPaths2[authViewPathsKey] === path) {
      return authViewPathsKey;
    }
  }
}
function getPasswordSchema(passwordValidation, localization) {
  let schema = z.string().min(1, {
    message: localization == null ? void 0 : localization.PASSWORD_REQUIRED
  });
  if (passwordValidation == null ? void 0 : passwordValidation.minLength) {
    schema = schema.min(passwordValidation.minLength, {
      message: localization == null ? void 0 : localization.PASSWORD_TOO_SHORT
    });
  }
  if (passwordValidation == null ? void 0 : passwordValidation.maxLength) {
    schema = schema.max(passwordValidation.maxLength, {
      message: localization == null ? void 0 : localization.PASSWORD_TOO_LONG
    });
  }
  if (passwordValidation == null ? void 0 : passwordValidation.regex) {
    schema = schema.regex(passwordValidation.regex, {
      message: localization == null ? void 0 : localization.INVALID_PASSWORD
    });
  }
  return schema;
}









exports.cn = cn; exports.isValidEmail = isValidEmail; exports.getLocalizedError = getLocalizedError; exports.getSearchParam = getSearchParam; exports.getAuthViewByPath = getAuthViewByPath; exports.getPasswordSchema = getPasswordSchema; exports.authViewPaths = authViewPaths;
