import { TriplitClient } from '@triplit/client';
import { User } from 'better-auth';
import { S as Session, R as Refetch, A as AuthHooks } from './auth-hooks-DL8c3_Dy.cjs';
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
interface UseTriplitOptionsProps {
    triplit: TriplitClient<any>;
    modelNames?: Partial<ModelNames>;
    usePlural?: boolean;
    sessionData?: {
        user: User;
        session: Session;
    } | null;
    refetch?: Refetch;
    isPending: boolean;
}
declare function useTriplitHooks({ triplit, usePlural, modelNames, sessionData, isPending }: UseTriplitOptionsProps): {
    hooks: AuthHooks;
};

export { type UseTriplitOptionsProps, useTriplitHooks };
