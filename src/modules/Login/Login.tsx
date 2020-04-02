import * as React from "react";
import * as firebase from "firebase/app";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { useSession } from "../../components/Firebase/Auth";

export const Login: React.FC = () => {
  const location = useLocation();
  const session = useSession();

  const { from }: any = location.state || { from: { pathname: "/" } };

  if (session) {
    return <Redirect to={from} />;
  }

  return (
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
  );
};
