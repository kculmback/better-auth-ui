import {
  AuthUIProvider
} from "./chunk-BIIOZXX7.js";
import "./chunk-X44IQ7M2.js";

// src/lib/tanstack/auth-ui-provider-tanstack.tsx
import { useCallback as useCallback2, useMemo as useMemo2 } from "react";

// src/lib/tanstack/use-tanstack-options.ts
import {
  AuthQueryContext,
  createAuthHooks
} from "@daveyplate/better-auth-tanstack";
import { useIsRestoring, useQueryClient } from "@tanstack/react-query";
import { useCallback, useContext, useMemo } from "react";
function useTanstackOptions({
  authClient
}) {
  const {
    useUnlinkAccount,
    useUpdateUser,
    useDeletePasskey,
    useRevokeSession,
    useRevokeDeviceSession,
    useSetActiveSession
  } = createAuthHooks(authClient);
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserAsync } = useUpdateUser();
  const { mutateAsync: deletePasskeyAsync } = useDeletePasskey();
  const { mutateAsync: unlinkAccountAsync } = useUnlinkAccount();
  const { mutateAsync: revokeSessionAsync } = useRevokeSession();
  const { mutateAsync: revokeDeviceSessionAsync } = useRevokeDeviceSession();
  const { setActiveSessionAsync } = useSetActiveSession();
  const { sessionKey } = useContext(AuthQueryContext);
  const hooks = useMemo(
    () => ({
      ...createAuthHooks(
        authClient
      ),
      useIsRestoring
    }),
    [authClient]
  );
  const mutators = useMemo(
    () => ({
      updateUser: async (params) => {
        const { error } = await updateUserAsync({
          ...params,
          fetchOptions: { throw: false }
        });
        if (error) throw error;
      },
      unlinkAccount: async (params) => {
        const { error } = await unlinkAccountAsync({
          ...params,
          fetchOptions: { throw: false }
        });
        if (error) throw error;
      },
      deletePasskey: async (params) => {
        const { error } = await deletePasskeyAsync({
          ...params,
          fetchOptions: { throw: false }
        });
        if (error) throw error;
      },
      revokeSession: async (params) => {
        const { error } = await revokeSessionAsync({
          ...params,
          fetchOptions: { throw: false }
        });
        if (error) throw error;
      },
      setActiveSession: async (params) => {
        const { error } = await setActiveSessionAsync({
          ...params,
          fetchOptions: { throw: false }
        });
        if (error) throw error;
      },
      revokeDeviceSession: async (params) => {
        const { error } = await revokeDeviceSessionAsync({
          ...params,
          fetchOptions: { throw: false }
        });
        if (error) throw error;
      }
    }),
    [
      updateUserAsync,
      deletePasskeyAsync,
      unlinkAccountAsync,
      revokeSessionAsync,
      revokeDeviceSessionAsync,
      setActiveSessionAsync
    ]
  );
  const onSessionChange = useCallback(async () => {
    await queryClient.refetchQueries({ queryKey: sessionKey });
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey !== sessionKey
    });
  }, [queryClient, sessionKey]);
  return {
    hooks,
    mutators,
    onSessionChange,
    optimistic: true
  };
}

// src/lib/tanstack/auth-ui-provider-tanstack.tsx
import { jsx } from "react/jsx-runtime";
function AuthUIProviderTanstack({
  children,
  authClient,
  hooks: hooksProp,
  mutators: mutatorsProp,
  onSessionChange: onSessionChangeProp,
  ...props
}) {
  const {
    hooks: contextHooks,
    mutators: contextMutators,
    onSessionChange,
    optimistic
  } = useTanstackOptions({ authClient });
  const hooks = useMemo2(
    () => ({ ...contextHooks, ...hooksProp }),
    [contextHooks, hooksProp]
  );
  const mutators = useMemo2(
    () => ({ ...contextMutators, ...mutatorsProp }),
    [contextMutators, mutatorsProp]
  );
  const onSessionChangeCallback = useCallback2(async () => {
    await onSessionChange();
    await (onSessionChangeProp == null ? void 0 : onSessionChangeProp());
  }, [onSessionChangeProp, onSessionChange]);
  return /* @__PURE__ */ jsx(
    AuthUIProvider,
    {
      authClient,
      hooks,
      mutators,
      onSessionChange: onSessionChangeCallback,
      optimistic,
      ...props,
      children
    }
  );
}
export {
  AuthUIProviderTanstack
};
