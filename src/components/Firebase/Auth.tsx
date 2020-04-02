import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { authCtx } from "./ctx";

const Auth: React.FC = ({ children }) => {
  const [authState, setAuthState] = React.useState<firebase.User | null>(
    firebase.auth().currentUser
  );

  React.useEffect(() => {
    let isMounted = true;
    firebase.auth().onAuthStateChanged(function(user) {
      console.log({ user });
      isMounted && setAuthState(user || null);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return <authCtx.Provider value={authState}>{children}</authCtx.Provider>;
};

export default Auth;
