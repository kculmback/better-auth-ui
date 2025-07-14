import { InstantReactWebDatabase } from '@instantdb/react';
import { User } from 'better-auth';
import { S as Session, R as Refetch, A as AuthHooks } from './auth-hooks-DL8c3_Dy.cjs';
import { A as AuthMutators } from './auth-mutators-CK8vxOJz.cjs';
import '@better-fetch/fetch';
import 'better-auth/plugins/organization';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'better-auth/plugins/passkey';

declare const namespaces: readonly ["user", "session", "account", "passkey"];
type Namespace = (typeof namespaces)[number];
type ModelNames = {
    [key in Namespace]: string;
};
interface UseInstantOptionsProps {
    db: InstantReactWebDatabase<any>;
    modelNames?: Partial<ModelNames>;
    usePlural?: boolean;
    sessionData?: {
        user: User;
        session: Session;
    };
    refetch?: Refetch;
    user?: {
        id: string;
    } | null;
    isPending: boolean;
}
declare function useInstantOptions({ db, usePlural, modelNames, sessionData, isPending, user }: UseInstantOptionsProps): {
    hooks: AuthHooks;
    mutators: AuthMutators;
};

export { type UseInstantOptionsProps, useInstantOptions };
