import * as _better_fetch_fetch from '@better-fetch/fetch';
import { BetterFetchError } from '@better-fetch/fetch';
import * as better_auth_plugins_organization from 'better-auth/plugins/organization';
import { Invitation } from 'better-auth/plugins/organization';
import * as better_auth_react from 'better-auth/react';
import { createAuthClient } from 'better-auth/react';
import * as better_auth_client_plugins from 'better-auth/client/plugins';
import * as better_auth from 'better-auth';
import * as better_auth_plugins_passkey from 'better-auth/plugins/passkey';

type Refetch = () => Promise<unknown> | unknown;

type AnyAuthClient = Omit<ReturnType<typeof createAuthClient>, "signUp" | "getSession">;

declare const authClient: {
    useListPasskeys: () => {
        data: better_auth_plugins_passkey.Passkey[] | null;
        error: null | _better_fetch_fetch.BetterFetchError;
        isPending: boolean;
        isRefetching: boolean;
        refetch: () => void;
    };
} & {} & {
    useActiveOrganization: () => {
        data: better_auth.Prettify<{
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        } & {
            members: (better_auth_plugins_organization.Member & {
                user: {
                    id: string;
                    name: string;
                    email: string;
                    image: string | undefined;
                };
            })[];
            invitations: better_auth_plugins_organization.Invitation[];
        }> | null;
        error: null | _better_fetch_fetch.BetterFetchError;
        isPending: boolean;
        isRefetching: boolean;
        refetch: () => void;
    };
    useListOrganizations: () => {
        data: {
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        }[] | null;
        error: null | _better_fetch_fetch.BetterFetchError;
        isPending: boolean;
        isRefetching: boolean;
        refetch: () => void;
    };
    useActiveMember: () => {
        data: {
            id: string;
            userId: string;
            createdAt: Date;
            organizationId: string;
            role: string;
            teamId?: string | undefined;
        } | null;
        error: null | _better_fetch_fetch.BetterFetchError;
        isPending: boolean;
        isRefetching: boolean;
        refetch: () => void;
    };
} & {
    apiKey: {
        create: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                name?: string | undefined;
                prefix?: string | undefined;
                userId?: string | undefined;
                metadata?: any;
                rateLimitMax?: number | undefined;
                refillInterval?: number | undefined;
                refillAmount?: number | undefined;
                rateLimitEnabled?: boolean | undefined;
                rateLimitTimeWindow?: number | undefined;
                remaining?: number | null | undefined;
                permissions?: Record<string, string[]> | undefined;
                expiresIn?: number | null | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            name?: string | undefined;
            prefix?: string | undefined;
            userId?: string | undefined;
            metadata?: any;
            rateLimitMax?: number | undefined;
            refillInterval?: number | undefined;
            refillAmount?: number | undefined;
            rateLimitEnabled?: boolean | undefined;
            rateLimitTimeWindow?: number | undefined;
            remaining?: number | null | undefined;
            permissions?: Record<string, string[]> | undefined;
            expiresIn?: number | null | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            key: string;
            metadata: any;
            permissions: any;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        get: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                id: string;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            query: {
                id: string;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            permissions: {
                [key: string]: string[];
            } | null;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            metadata: Record<string, any> | null;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        update: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                keyId: string;
                name?: string | undefined;
                userId?: string | undefined;
                metadata?: any;
                rateLimitMax?: number | undefined;
                refillInterval?: number | undefined;
                refillAmount?: number | undefined;
                enabled?: boolean | undefined;
                rateLimitEnabled?: boolean | undefined;
                rateLimitTimeWindow?: number | undefined;
                remaining?: number | undefined;
                permissions?: Record<string, string[]> | null | undefined;
                expiresIn?: number | null | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            keyId: string;
            name?: string | undefined;
            userId?: string | undefined;
            metadata?: any;
            rateLimitMax?: number | undefined;
            refillInterval?: number | undefined;
            refillAmount?: number | undefined;
            enabled?: boolean | undefined;
            rateLimitEnabled?: boolean | undefined;
            rateLimitTimeWindow?: number | undefined;
            remaining?: number | undefined;
            permissions?: Record<string, string[]> | null | undefined;
            expiresIn?: number | null | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            permissions: {
                [key: string]: string[];
            } | null;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            metadata: Record<string, any> | null;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        delete: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                keyId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            keyId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        list: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            permissions: {
                [key: string]: string[];
            } | null;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            metadata: Record<string, any> | null;
        }[], {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    multiSession: {
        listDeviceSessions: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            session: better_auth.Session;
            user: better_auth.User;
        }[], {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    multiSession: {
        setActive: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                sessionToken: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            sessionToken: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            session: better_auth.Session & Record<string, any>;
            user: better_auth.User & Record<string, any>;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    multiSession: {
        revoke: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                sessionToken: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            sessionToken: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            status: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        generateRegisterOptions: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                authenticatorAttachment?: "platform" | "cross-platform" | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: {
                authenticatorAttachment?: "platform" | "cross-platform" | undefined;
            } | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<better_auth_client_plugins.PublicKeyCredentialCreationOptionsJSON, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        generateAuthenticateOptions: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<better_auth_client_plugins.PublicKeyCredentialRequestOptionsJSON, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        verifyRegistration: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                name?: string | undefined;
                response?: any;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            name?: string | undefined;
            response?: any;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<better_auth_plugins_passkey.Passkey, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        verifyAuthentication: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                response: better_auth_client_plugins.AuthenticationResponseJSON;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            response: better_auth_client_plugins.AuthenticationResponseJSON;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            session: {
                token: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        listUserPasskeys: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<better_auth_plugins_passkey.Passkey[], {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        deletePasskey: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                id: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            id: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<never, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    passkey: {
        updatePasskey: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                id: string;
                name: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            id: string;
            name: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            passkey: better_auth_plugins_passkey.Passkey;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        oauth2: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                providerId: string;
                callbackURL?: string | undefined;
                errorCallbackURL?: string | undefined;
                newUserCallbackURL?: string | undefined;
                disableRedirect?: boolean | undefined;
                scopes?: string[] | undefined;
                requestSignUp?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            providerId: string;
            callbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
            scopes?: string[] | undefined;
            requestSignUp?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            url: string;
            redirect: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    oauth2: {
        callback: {
            ":providerid": <FetchOptions extends {
                cache?: RequestCache | undefined;
                credentials?: RequestCredentials | undefined;
                headers?: (HeadersInit & (HeadersInit | {
                    accept: "application/json" | "text/plain" | "application/octet-stream";
                    "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                    authorization: "Bearer" | "Basic";
                })) | undefined;
                integrity?: string | undefined;
                keepalive?: boolean | undefined;
                method?: string | undefined;
                mode?: RequestMode | undefined;
                priority?: RequestPriority | undefined;
                redirect?: RequestRedirect | undefined;
                referrer?: string | undefined;
                referrerPolicy?: ReferrerPolicy | undefined;
                signal?: (AbortSignal | null) | undefined;
                window?: null | undefined;
                onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
                onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
                onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
                onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
                onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
                hookOptions?: {
                    cloneResponse?: boolean;
                } | undefined;
                timeout?: number | undefined;
                customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
                plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
                baseURL?: string | undefined;
                throw?: boolean | undefined;
                auth?: ({
                    type: "Bearer";
                    token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
                } | {
                    type: "Basic";
                    username: string | (() => string | undefined) | undefined;
                    password: string | (() => string | undefined) | undefined;
                } | {
                    type: "Custom";
                    prefix: string | (() => string | undefined) | undefined;
                    value: string | (() => string | undefined) | undefined;
                }) | undefined;
                body?: undefined;
                query?: (Partial<{
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }> & Record<string, any>) | undefined;
                params?: {
                    providerId: string;
                } | undefined;
                duplex?: "full" | "half" | undefined;
                jsonParser?: ((text: string) => Promise<any> | any) | undefined;
                retry?: _better_fetch_fetch.RetryOptions | undefined;
                retryAttempt?: number | undefined;
                output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
                errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
                disableValidation?: boolean | undefined;
            }>(data_0: better_auth.Prettify<{
                query: {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                };
                fetchOptions?: FetchOptions | undefined;
            }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<NonNullable<void>, {
                code?: string;
                message?: string;
            }, FetchOptions["throw"] extends true ? true : false>>;
        };
    };
} & {
    oauth2: {
        link: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                providerId: string;
                callbackURL: string;
                errorCallbackURL?: string | undefined;
                scopes?: string[] | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            providerId: string;
            callbackURL: string;
            errorCallbackURL?: string | undefined;
            scopes?: string[] | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            url: string;
            redirect: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        anonymous: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        username: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
                username: string;
                rememberMe?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            password: string;
            username: string;
            rememberMe?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                username: string;
                name: string;
                image: string | null | undefined;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        magicLink: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                name?: string | undefined;
                callbackURL?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            name?: string | undefined;
            callbackURL?: string | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            status: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    magicLink: {
        verify: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                token: string;
                callbackURL?: string | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            query: {
                token: string;
                callbackURL?: string | undefined;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                image: string | null | undefined;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    emailOtp: {
        sendVerificationOtp: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                type: "sign-in" | "email-verification" | "forget-password";
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            type: "sign-in" | "email-verification" | "forget-password";
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    emailOtp: {
        verifyEmail: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                otp: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            otp: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<NonNullable<{
            status: boolean;
            token: string;
            user: {
                id: any;
                email: any;
                emailVerified: any;
                name: any;
                image: any;
                createdAt: any;
                updatedAt: any;
            };
        } | {
            status: boolean;
            token: null;
            user: {
                id: any;
                email: any;
                emailVerified: any;
                name: any;
                image: any;
                createdAt: any;
                updatedAt: any;
            };
        }>, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        emailOtp: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                otp: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            otp: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                image: string | null | undefined;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    forgetPassword: {
        emailOtp: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    emailOtp: {
        resetPassword: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
                email: string;
                otp: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            password: string;
            email: string;
            otp: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        enable: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
                issuer?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            password: string;
            issuer?: string | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            totpURI: string;
            backupCodes: string[];
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        disable: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            password: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            status: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        verifyBackupCode: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                code: string;
                trustDevice?: boolean | undefined;
                disableSession?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            code: string;
            trustDevice?: boolean | undefined;
            disableSession?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string | undefined;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                image: string | null | undefined;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        generateBackupCodes: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            password: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            status: boolean;
            backupCodes: string[];
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        sendOtp: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                trustDevice?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            status: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        verifyOtp: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                code: string;
                trustDevice?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            code: string;
            trustDevice?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string;
            user: {
                id: any;
                email: any;
                emailVerified: any;
                name: any;
                image: any;
                createdAt: any;
                updatedAt: any;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        getTotpUri: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            password: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            totpURI: string;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    twoFactor: {
        verifyTotp: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                code: string;
                trustDevice?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            code: string;
            trustDevice?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            token: string;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                image: string | null | undefined;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        create: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                name: string;
                slug: string;
                userId?: string | undefined;
                metadata?: Record<string, any> | undefined;
                logo?: string | undefined;
                keepCurrentActiveOrganization?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            name: string;
            slug: string;
            userId?: string | undefined;
            metadata?: Record<string, any> | undefined;
            logo?: string | undefined;
            keepCurrentActiveOrganization?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            metadata: Record<string, any> | undefined;
            members: {
                id: string;
                userId: string;
                createdAt: Date;
                organizationId: string;
                role: string;
                teamId?: string | undefined;
            }[];
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            logo?: string | null | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        update: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                data: {
                    name?: string | undefined;
                    metadata?: Record<string, any> | undefined;
                    slug?: string | undefined;
                    logo?: string | undefined;
                };
                organizationId?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            data: {
                name?: string | undefined;
                metadata?: Record<string, any> | undefined;
                slug?: string | undefined;
                logo?: string | undefined;
            };
            organizationId?: string | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            metadata: Record<string, any> | undefined;
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            logo?: string | null | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        delete: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                organizationId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            organizationId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        setActive: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                organizationId?: string | null | undefined;
                organizationSlug?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            organizationId?: string | null | undefined;
            organizationSlug?: string | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            members: {
                id: string;
                organizationId: string;
                role: "member" | "admin" | "owner";
                createdAt: Date;
                userId: string;
                user: {
                    email: string;
                    name: string;
                    image?: string;
                };
            }[];
            invitations: {
                id: string;
                organizationId: string;
                email: string;
                role: "member" | "admin" | "owner";
                status: better_auth_plugins_organization.InvitationStatus;
                inviterId: string;
                expiresAt: Date;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        getFullOrganization: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                organizationId?: string | undefined;
                organizationSlug?: string | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: {
                organizationId?: string | undefined;
                organizationSlug?: string | undefined;
            } | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            members: {
                id: string;
                organizationId: string;
                role: "member" | "admin" | "owner";
                createdAt: Date;
                userId: string;
                user: {
                    email: string;
                    name: string;
                    image?: string;
                };
            }[];
            invitations: {
                id: string;
                organizationId: string;
                email: string;
                role: "member" | "admin" | "owner";
                status: better_auth_plugins_organization.InvitationStatus;
                inviterId: string;
                expiresAt: Date;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        list: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        }[], {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        inviteMember: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                role: "member" | "admin" | "owner" | ("member" | "admin" | "owner")[];
                organizationId?: string;
                resend?: boolean;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            role: "member" | "admin" | "owner" | ("member" | "admin" | "owner")[];
            organizationId?: string;
            resend?: boolean;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            id: string;
            email: string;
            status: "accepted" | "canceled" | "rejected" | "pending";
            expiresAt: Date;
            organizationId: string;
            role: string;
            inviterId: string;
            teamId?: string | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        cancelInvitation: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                invitationId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            invitationId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            id: string;
            email: string;
            status: "accepted" | "canceled" | "rejected" | "pending";
            expiresAt: Date;
            organizationId: string;
            role: string;
            inviterId: string;
            teamId?: string | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        acceptInvitation: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                invitationId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            invitationId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            invitation: {
                id: string;
                email: string;
                status: "accepted" | "canceled" | "rejected" | "pending";
                expiresAt: Date;
                organizationId: string;
                role: string;
                inviterId: string;
                teamId?: string | undefined;
            };
            member: {
                id: string;
                userId: string;
                createdAt: Date;
                organizationId: string;
                role: string;
                teamId?: string | undefined;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        getInvitation: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                id: string;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            query: {
                id: string;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            organizationName: string;
            organizationSlug: string;
            inviterEmail: string;
            id: string;
            email: string;
            status: "accepted" | "canceled" | "rejected" | "pending";
            expiresAt: Date;
            organizationId: string;
            role: string;
            inviterId: string;
            teamId?: string | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        rejectInvitation: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                invitationId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            invitationId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            invitation: {
                id: string;
                email: string;
                status: "accepted" | "canceled" | "rejected" | "pending";
                expiresAt: Date;
                organizationId: string;
                role: string;
                inviterId: string;
                teamId?: string | undefined;
            } | null;
            member: null;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        checkSlug: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                slug: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            slug: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            status: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        removeMember: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                memberIdOrEmail: string;
                organizationId?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            memberIdOrEmail: string;
            organizationId?: string | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            member: {
                id: string;
                userId: string;
                createdAt: Date;
                organizationId: string;
                role: string;
                teamId?: string | undefined;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        updateMemberRole: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                role: "member" | "admin" | "owner" | ("member" | "admin" | "owner")[];
                memberId: string;
                organizationId?: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            role: "member" | "admin" | "owner" | ("member" | "admin" | "owner")[];
            memberId: string;
            organizationId?: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            id: string;
            userId: string;
            createdAt: Date;
            organizationId: string;
            role: string;
            teamId?: string | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        getActiveMember: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            user: {
                id: string;
                name: string;
                email: string;
                image: string | null | undefined;
            };
            id: string;
            userId: string;
            createdAt: Date;
            organizationId: string;
            role: string;
            teamId?: string | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        leave: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                organizationId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            organizationId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            user: {
                id: string;
                name: string;
                email: string;
                image: string | null | undefined;
            };
            id: string;
            userId: string;
            createdAt: Date;
            organizationId: string;
            role: string;
            teamId?: string | undefined;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        listInvitations: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                organizationId?: string | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: better_auth.Prettify<{
            query?: {
                organizationId?: string | undefined;
            } | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            id: string;
            email: string;
            status: "accepted" | "canceled" | "rejected" | "pending";
            expiresAt: Date;
            organizationId: string;
            role: string;
            inviterId: string;
            teamId?: string | undefined;
        }[], {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    organization: {
        hasPermission: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<({
                permission: {
                    readonly organization?: ("update" | "delete")[] | undefined;
                    readonly member?: ("update" | "delete" | "create")[] | undefined;
                    readonly invitation?: ("create" | "cancel")[] | undefined;
                    readonly team?: ("update" | "delete" | "create")[] | undefined;
                };
                permissions?: never;
            } | {
                permissions: {
                    readonly organization?: ("update" | "delete")[] | undefined;
                    readonly member?: ("update" | "delete" | "create")[] | undefined;
                    readonly invitation?: ("create" | "cancel")[] | undefined;
                    readonly team?: ("update" | "delete" | "create")[] | undefined;
                };
                permission?: never;
            }) & {
                organizationId?: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<(({
            permission: {
                readonly organization?: ("update" | "delete")[] | undefined;
                readonly member?: ("update" | "delete" | "create")[] | undefined;
                readonly invitation?: ("create" | "cancel")[] | undefined;
                readonly team?: ("update" | "delete" | "create")[] | undefined;
            };
            permissions?: never;
        } | {
            permissions: {
                readonly organization?: ("update" | "delete")[] | undefined;
                readonly member?: ("update" | "delete" | "create")[] | undefined;
                readonly invitation?: ("create" | "cancel")[] | undefined;
                readonly team?: ("update" | "delete" | "create")[] | undefined;
            };
            permission?: never;
        }) & {
            organizationId?: string;
        }) & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            error: null;
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        social: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                callbackURL?: string | undefined;
                newUserCallbackURL?: string | undefined;
                errorCallbackURL?: string | undefined;
                disableRedirect?: boolean | undefined;
                idToken?: {
                    token: string;
                    nonce?: string | undefined;
                    accessToken?: string | undefined;
                    refreshToken?: string | undefined;
                    expiresAt?: number | undefined;
                } | undefined;
                scopes?: string[] | undefined;
                requestSignUp?: boolean | undefined;
                loginHint?: string | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
            callbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
            idToken?: {
                token: string;
                nonce?: string | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                expiresAt?: number | undefined;
            } | undefined;
            scopes?: string[] | undefined;
            requestSignUp?: boolean | undefined;
            loginHint?: string | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<NonNullable<{
            redirect: boolean;
            token: string;
            url: undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            url: string;
            redirect: boolean;
        }>, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    getSession: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<{
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        }> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        query?: {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        } | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        user: {
            id: string;
            name: string;
            emailVerified: boolean;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined | undefined;
            isAnonymous?: boolean | null | undefined;
            username?: string | null | undefined;
            displayUsername?: string | null | undefined;
            twoFactorEnabled: boolean | null | undefined;
        };
        session: {
            id: string;
            token: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            ipAddress?: string | null | undefined | undefined;
            userAgent?: string | null | undefined | undefined;
            activeOrganizationId?: string | null | undefined;
        };
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signOut: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        success: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signIn: {
        email: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                password: string;
                callbackURL?: string | undefined;
                rememberMe?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            password: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            redirect: boolean;
            token: string;
            url: string | undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    forgetPassword: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            email: string;
            redirectTo?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        email: string;
        redirectTo?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    resetPassword: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            newPassword: string;
            token?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<{
            token?: string | undefined;
        }> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        newPassword: string;
        token?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    verifyEmail: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<{
            token: string;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        query: {
            token: string;
            callbackURL?: string | undefined;
        };
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<NonNullable<void | {
        status: boolean;
        user: {
            id: any;
            email: any;
            name: any;
            image: any;
            emailVerified: any;
            createdAt: any;
            updatedAt: any;
        };
    } | {
        status: boolean;
        user: null;
    }>, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    sendVerificationEmail: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            email: string;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        email: string;
        callbackURL?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    changeEmail: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            newEmail: string;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        newEmail: string;
        callbackURL?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    changePassword: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        newPassword: string;
        currentPassword: string;
        revokeOtherSessions?: boolean | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        token: string | null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    deleteUser: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            callbackURL?: string | undefined;
            token?: string | undefined;
            password?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        callbackURL?: string | undefined;
        token?: string | undefined;
        password?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        success: boolean;
        message: string;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    resetPassword: {
        ":token": <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                callbackURL: string;
            }> & Record<string, any>) | undefined;
            params?: {
                token: string;
            } | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            query: {
                callbackURL: string;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<never, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    requestPasswordReset: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            email: string;
            redirectTo?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        email: string;
        redirectTo?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    resetPassword: {
        ":token": <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                callbackURL: string;
            }> & Record<string, any>) | undefined;
            params?: {
                token: string;
            } | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            query: {
                callbackURL: string;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<never, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    revokeSession: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            token: string;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        token: string;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    revokeSessions: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    revokeOtherSessions: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    linkSocial: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
            callbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            scopes?: string[] | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
        callbackURL?: string | undefined;
        errorCallbackURL?: string | undefined;
        scopes?: string[] | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        url: string;
        redirect: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    listAccounts: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        id: string;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
        accountId: string;
        scopes: string[];
    }[], {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    deleteUser: {
        callback: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                token: string;
                callbackURL?: string | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            query: {
                token: string;
                callbackURL?: string | undefined;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
            success: boolean;
            message: string;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    unlinkAccount: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            providerId: string;
            accountId?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        providerId: string;
        accountId?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    refreshToken: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            providerId: string;
            accountId?: string | undefined;
            userId?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        providerId: string;
        accountId?: string | undefined;
        userId?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<better_auth.OAuth2Tokens, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    getAccessToken: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            providerId: string;
            accountId?: string | undefined;
            userId?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        providerId: string;
        accountId?: string | undefined;
        userId?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        accessToken: string | undefined;
        accessTokenExpiresAt: Date | undefined;
        scopes: string[];
        idToken: string | undefined;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    accountInfo: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            accountId: string;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: better_auth.Prettify<{
        accountId: string;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
        };
        data: Record<string, any>;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signUp: {
        email: <FetchOptions extends {
            cache?: RequestCache | undefined;
            credentials?: RequestCredentials | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            method?: string | undefined;
            mode?: RequestMode | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
            onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
            onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
            plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: _better_fetch_fetch.RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: better_auth.Prettify<{
            email: string;
            name: string;
            password: string;
            image?: string;
            callbackURL?: string;
            fetchOptions?: FetchOptions | undefined;
        } & {} & {
            isAnonymous?: boolean | null | undefined;
        } & {} & {
            username?: string | null | undefined;
            displayUsername?: string | null | undefined;
        } & {} & {}>, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<NonNullable<{
            token: null;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            token: string;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        }>, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    updateUser: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<Partial<{}> & {
            name?: string;
            image?: string;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        image?: string | null;
        name?: string;
        fetchOptions?: FetchOptions | undefined;
    } & Partial<{} & {
        isAnonymous?: boolean | null | undefined;
    } & {} & {
        username?: string | null | undefined;
        displayUsername?: string | null | undefined;
    } & {} & {}>> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    listSessions: <FetchOptions extends {
        cache?: RequestCache | undefined;
        credentials?: RequestCredentials | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: RequestMode | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void) | undefined;
        onResponse?: ((context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void) | undefined;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: _better_fetch_fetch.ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: _better_fetch_fetch.ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: _better_fetch_fetch.FetchEsque | undefined;
        plugins?: _better_fetch_fetch.BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: _better_fetch_fetch.RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (_better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: better_auth.Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<_better_fetch_fetch.BetterFetchResponse<better_auth.Prettify<{
        token: string;
        expiresAt: Date;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    }>[], {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signIn: {
        passkey: (opts?: {
            autoFill?: boolean;
            email?: string;
            fetchOptions?: _better_fetch_fetch.BetterFetchOption;
        }, options?: _better_fetch_fetch.BetterFetchOption) => Promise<{
            data: null;
            error: {
                message?: string | undefined;
                status: number;
                statusText: string;
            };
        } | undefined>;
    };
    passkey: {
        addPasskey: (opts?: {
            fetchOptions?: _better_fetch_fetch.BetterFetchOption;
            name?: string;
            authenticatorAttachment?: "platform" | "cross-platform";
            useAutoRegister?: boolean;
        }, fetchOpts?: _better_fetch_fetch.BetterFetchOption) => Promise<{
            data: null;
            error: {
                message?: string | undefined;
                status: number;
                statusText: string;
            };
        } | undefined>;
    };
    $Infer: {
        Passkey: better_auth_plugins_passkey.Passkey;
    };
} & {
    oneTap: (opts?: better_auth_client_plugins.GoogleOneTapActionOptions, fetchOptions?: _better_fetch_fetch.BetterFetchOption) => Promise<void>;
} & {
    $Infer: {
        ActiveOrganization: {
            members: {
                id: string;
                organizationId: string;
                role: "member" | "admin" | "owner";
                createdAt: Date;
                userId: string;
                user: {
                    email: string;
                    name: string;
                    image?: string;
                };
            }[];
            invitations: {
                id: string;
                organizationId: string;
                email: string;
                role: "member" | "admin" | "owner";
                status: better_auth_plugins_organization.InvitationStatus;
                inviterId: string;
                expiresAt: Date;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            slug: string;
            metadata?: any;
            logo?: string | null | undefined;
        };
        Organization: better_auth_plugins_organization.Organization;
        Invitation: {
            id: string;
            organizationId: string;
            email: string;
            role: "member" | "admin" | "owner";
            status: better_auth_plugins_organization.InvitationStatus;
            inviterId: string;
            expiresAt: Date;
        };
        Member: {
            id: string;
            organizationId: string;
            role: "member" | "admin" | "owner";
            createdAt: Date;
            userId: string;
            user: {
                email: string;
                name: string;
                image?: string;
            };
        };
        Team: better_auth_plugins_organization.Team;
    };
    organization: {
        checkRolePermission: <R extends "member" | "admin" | "owner">(data: ({
            permission: {
                readonly organization?: ("update" | "delete")[] | undefined;
                readonly member?: ("update" | "delete" | "create")[] | undefined;
                readonly invitation?: ("create" | "cancel")[] | undefined;
                readonly team?: ("update" | "delete" | "create")[] | undefined;
            };
            permissions?: never;
        } | {
            permissions: {
                readonly organization?: ("update" | "delete")[] | undefined;
                readonly member?: ("update" | "delete" | "create")[] | undefined;
                readonly invitation?: ("create" | "cancel")[] | undefined;
                readonly team?: ("update" | "delete" | "create")[] | undefined;
            };
            permission?: never;
        }) & {
            role: R;
        }) => boolean;
    };
} & {
    useSession: () => {
        data: {
            user: {
                id: string;
                name: string;
                emailVerified: boolean;
                email: string;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined | undefined;
                isAnonymous?: boolean | null | undefined;
                username?: string | null | undefined;
                displayUsername?: string | null | undefined;
                twoFactorEnabled: boolean | null | undefined;
            };
            session: {
                id: string;
                token: string;
                userId: string;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
                activeOrganizationId?: string | null | undefined;
            };
        } | null;
        isPending: boolean;
        error: _better_fetch_fetch.BetterFetchError | null;
        refetch: () => void;
    };
    $Infer: {
        Session: {
            user: {
                id: string;
                name: string;
                emailVerified: boolean;
                email: string;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined | undefined;
                isAnonymous?: boolean | null | undefined;
                username?: string | null | undefined;
                displayUsername?: string | null | undefined;
                twoFactorEnabled: boolean | null | undefined;
            };
            session: {
                id: string;
                token: string;
                userId: string;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
                activeOrganizationId?: string | null | undefined;
            };
        };
    };
    $fetch: _better_fetch_fetch.BetterFetch<{
        plugins: (_better_fetch_fetch.BetterFetchPlugin | {
            id: string;
            name: string;
            hooks: {
                onSuccess(context: _better_fetch_fetch.SuccessContext<any>): void;
            };
        })[];
        redirect?: RequestRedirect;
        method: string;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        cache?: RequestCache;
        credentials?: RequestCredentials;
        integrity?: string;
        keepalive?: boolean;
        mode?: RequestMode;
        priority?: RequestPriority;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        signal?: AbortSignal | null;
        window?: null;
        onRequest?: <T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void;
        onResponse?: (context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: (context: _better_fetch_fetch.ErrorContext) => Promise<void> | void;
        onRetry?: (response: _better_fetch_fetch.ResponseContext) => Promise<void> | void;
        hookOptions?: {
            cloneResponse?: boolean;
        };
        timeout?: number;
        customFetchImpl: _better_fetch_fetch.FetchEsque;
        baseURL: string;
        throw?: boolean;
        auth?: {
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        };
        body?: any;
        query?: any;
        params?: any;
        duplex?: "full" | "half";
        jsonParser: (text: string) => Promise<any> | any;
        retry?: _better_fetch_fetch.RetryOptions;
        retryAttempt?: number;
        output?: _better_fetch_fetch.StandardSchemaV1 | typeof Blob | typeof File;
        errorSchema?: _better_fetch_fetch.StandardSchemaV1;
        disableValidation?: boolean;
    }, unknown, unknown, {}>;
    $store: {
        notify: (signal?: Omit<string, "$sessionSignal"> | "$sessionSignal") => void;
        listen: (signal: Omit<string, "$sessionSignal"> | "$sessionSignal", listener: (value: boolean, oldValue?: boolean | undefined) => void) => void;
        atoms: Record<string, better_auth_react.WritableAtom<any>>;
    };
    $ERROR_CODES: {
        USER_NOT_FOUND: string;
        FAILED_TO_CREATE_USER: string;
        FAILED_TO_CREATE_SESSION: string;
        FAILED_TO_UPDATE_USER: string;
        FAILED_TO_GET_SESSION: string;
        INVALID_PASSWORD: string;
        INVALID_EMAIL: string;
        INVALID_EMAIL_OR_PASSWORD: string;
        SOCIAL_ACCOUNT_ALREADY_LINKED: string;
        PROVIDER_NOT_FOUND: string;
        INVALID_TOKEN: string;
        ID_TOKEN_NOT_SUPPORTED: string;
        FAILED_TO_GET_USER_INFO: string;
        USER_EMAIL_NOT_FOUND: string;
        EMAIL_NOT_VERIFIED: string;
        PASSWORD_TOO_SHORT: string;
        PASSWORD_TOO_LONG: string;
        USER_ALREADY_EXISTS: string;
        EMAIL_CAN_NOT_BE_UPDATED: string;
        CREDENTIAL_ACCOUNT_NOT_FOUND: string;
        SESSION_EXPIRED: string;
        FAILED_TO_UNLINK_LAST_ACCOUNT: string;
        ACCOUNT_NOT_FOUND: string;
        USER_ALREADY_HAS_PASSWORD: string;
    };
};
type AuthClient = typeof authClient;
type Session = AuthClient["$Infer"]["Session"]["session"];

type ApiKey = {
    id: string;
    name: string;
    start: string;
    expiresAt?: Date;
    createdAt: Date;
    updatedAt: Date;
};

type AnyAuthSession = AnyAuthClient["$Infer"]["Session"];
type AuthHook<T> = {
    isPending: boolean;
    data?: T | null;
    error?: BetterFetchError | null;
    refetch?: Refetch;
};
type AuthHooks = {
    useSession: () => ReturnType<AnyAuthClient["useSession"]>;
    useListAccounts: () => AuthHook<{
        accountId: string;
        provider: string;
    }[]>;
    useListDeviceSessions: () => AuthHook<AnyAuthClient["$Infer"]["Session"][]>;
    useListSessions: () => AuthHook<AnyAuthSession["session"][]>;
    useListPasskeys: () => Partial<ReturnType<AuthClient["useListPasskeys"]>>;
    useListApiKeys: () => AuthHook<ApiKey[]>;
    useActiveOrganization: () => Partial<ReturnType<AuthClient["useActiveOrganization"]>>;
    useListOrganizations: () => Partial<ReturnType<AuthClient["useListOrganizations"]>>;
    useHasPermission: (params: Parameters<AuthClient["organization"]["hasPermission"]>[0]) => AuthHook<{
        error: null;
        success: boolean;
    }>;
    useInvitation: (params: Parameters<AuthClient["organization"]["getInvitation"]>[0]) => AuthHook<Invitation & {
        organizationName: string;
        organizationSlug: string;
        organizationLogo?: string;
    }>;
    useIsRestoring?: () => boolean;
};

export type { AuthHooks as A, Refetch as R, Session as S, AuthClient as a, AnyAuthClient as b };
