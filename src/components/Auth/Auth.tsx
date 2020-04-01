import * as React from "react";

const authProviderCtx = React.createContext<null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <authProviderCtx.Provider value={null}>{children}</authProviderCtx.Provider>
  );
};

function useAuthContext() {
  const ctx = React.useContext(authProviderCtx);
  return ctx;
}

export function useSession() {
  return useAuthContext();
}
