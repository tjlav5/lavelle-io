import * as React from "react";
import * as firebase from "firebase/app";

const firebaseCtx = React.createContext<null>(null);

export const FirebaseProvider: React.FC = ({ children }) => {
  const [app, setApp] = React.useState<any | null>(null);

  if (!firebase.apps.length) {
    setApp(
      firebase.initializeApp({
        apiKey: "AIzaSyB3Ttk-K5sVkJ0FL_lXJ4EflWKt6GEzSXw",
        authDomain: "lavelle-io-1310.firebaseapp.com",
        databaseURL: "https://lavelle-io-1310.firebaseio.com",
        projectId: "lavelle-io-1310",
        storageBucket: "lavelle-io-1310.appspot.com",
        messagingSenderId: "431426547682",
        appId: "1:431426547682:web:eceef6d0c486f4164c53bb"
      })
    );
  }

  return <firebaseCtx.Provider value={app}>{children}</firebaseCtx.Provider>;
};

// export function useApp() {
//   return React.useContext(firebaseCtx);
// }

// export function useAuth() {
//   const [isAuthLoaded, setIsAuthLoaded] = React.useState(false);
//   const app = useApp();
//   console.log({ app });

//   React.useEffect(() => {
//     let isSubscribed = true;
//     async function lazyLoadAuth() {
//       await import("firebase/auth");
//       isSubscribed && setIsAuthLoaded(true);
//     }

//     lazyLoadAuth();
//     return () => {
//       isSubscribed = false;
//     };
//   }, [app]);

//   console.log({ isAuthLoaded });
//   return isAuthLoaded ? firebase.auth : null;
// }

// export function useIsLoggedIn() {}
