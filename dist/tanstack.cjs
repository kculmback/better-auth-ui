"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZE6BT3OYcjs = require('./chunk-ZE6BT3OY.cjs');
require('./chunk-QB6CPTMT.cjs');

// src/lib/tanstack/auth-ui-provider-tanstack.tsx
var _react = require('react');

// src/lib/tanstack/use-tanstack-options.ts



var _betterauthtanstack = require('@daveyplate/better-auth-tanstack');
var _reactquery = require('@tanstack/react-query');

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
  } = _betterauthtanstack.createAuthHooks.call(void 0, authClient);
  const queryClient = _reactquery.useQueryClient.call(void 0, );
  const { mutateAsync: updateUserAsync } = useUpdateUser();
  const { mutateAsync: deletePasskeyAsync } = useDeletePasskey();
  const { mutateAsync: unlinkAccountAsync } = useUnlinkAccount();
  const { mutateAsync: revokeSessionAsync } = useRevokeSession();
  const { mutateAsync: revokeDeviceSessionAsync } = useRevokeDeviceSession();
  const { setActiveSessionAsync } = useSetActiveSession();
  const { sessionKey } = _react.useContext.call(void 0, _betterauthtanstack.AuthQueryContext);
  const hooks = _react.useMemo.call(void 0, 
    () => ({
      ..._betterauthtanstack.createAuthHooks.call(void 0, 
        authClient
      ),
      useIsRestoring: _reactquery.useIsRestoring
    }),
    [authClient]
  );
  const mutators = _react.useMemo.call(void 0, 
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
  const onSessionChange = _react.useCallback.call(void 0, async () => {
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
var _jsxruntime = require('react/jsx-runtime');
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
  const hooks = _react.useMemo.call(void 0, 
    () => ({ ...contextHooks, ...hooksProp }),
    [contextHooks, hooksProp]
  );
  const mutators = _react.useMemo.call(void 0, 
    () => ({ ...contextMutators, ...mutatorsProp }),
    [contextMutators, mutatorsProp]
  );
  const onSessionChangeCallback = _react.useCallback.call(void 0, async () => {
    await onSessionChange();
    await (onSessionChangeProp == null ? void 0 : onSessionChangeProp());
  }, [onSessionChangeProp, onSessionChange]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _chunkZE6BT3OYcjs.AuthUIProvider,
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


exports.AuthUIProviderTanstack = AuthUIProviderTanstack;
