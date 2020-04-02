import * as React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useAuth, useUser } from "reactfire";

export const Login: React.FC = () => {
  const location = useLocation();
  const auth = useAuth();
  const user = useUser();

  const { from }: any = location.state || { from: { pathname: "/" } };

  if (user) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <button
        onClick={() => {
          auth.signInWithEmailAndPassword("tjlav5@gmail.com", "abc123");
        }}>
        Login
      </button>
    </div>
  );
};
