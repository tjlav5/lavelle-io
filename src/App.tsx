import * as React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  RouteProps,
  Redirect
} from "react-router-dom";
import { AuthProvider, useSession } from "./components/Auth/Auth";

export const App: React.FC = () => {
  const Login = React.lazy(() => import("./modules/Login/index"));

  return (
    <AuthProvider>
      <Router>
        <div>
          <button />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/public">
                <div />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/protected">
                <div />
              </PrivateRoute>
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const session = useSession();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        session ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
