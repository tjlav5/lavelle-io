import * as React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useSession } from "../../components/Firebase/useSession";
import { useFirebase } from "../../components/Firebase/useFirebase";

export const Login: React.FC = () => {
  const location = useLocation();
  const session = useSession();
  const firebase = useFirebase();

  const { from }: any = location.state || { from: { pathname: "/" } };

  if (session) {
    return <Redirect to={from} />;
  }

  return firebase ? (
    <div>
      <button
        onClick={() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword("tjlav5@gmail.com", "abc123")
            .catch(function(error) {
              // Handle Errors here.
              console.log(error.code);
              console.log(error.message);
              // ...
            });
        }}>
        Login
      </button>
    </div>
  ) : (
    <div>loading firebase</div>
  );
};
