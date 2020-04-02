import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

const authCtx = React.createContext<firebase.User | null>(null);

const Auth: React.FC = ({ children }) => {
  const [authState, setAuthState] = React.useState<firebase.User | null>(
    firebase.auth().currentUser
  );

  React.useEffect(() => {
    let isMounted = true;
    firebase.auth().onAuthStateChanged(function(user) {
      isMounted && setAuthState(user || null);
    });

    return () => {
      isMounted = false;
    };
  });

  return <authCtx.Provider value={authState}>{children}</authCtx.Provider>;
};

export function useSession() {
  const ctx = React.useContext(authCtx);
  return React.useMemo(() => ctx, [ctx]);
}

export default Auth;
