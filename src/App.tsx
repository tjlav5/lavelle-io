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
import { FirebaseProvider } from "./components/Firebase/Firebase";
import { useSession } from "./components/Firebase/Auth";

export const App: React.FC = () => {
  const Login = React.lazy(() => import("./modules/Login/index"));

  return (
    <FirebaseProvider>
      <Router>
        <div>
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
                <div>PUBLIC</div>
              </Route>

              <AuthenticatedRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/protected">
                  <ProtectedModule />
                </PrivateRoute>
              </AuthenticatedRoute>
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </FirebaseProvider>
  );
};

const ProtectedModule: React.FC = () => {
  const session: any = useSession()!;

  return <div>{session.email}</div>;
};

const AuthenticatedRoute: React.FC = ({ children }) => {
  const Auth = React.lazy(() => import("./components/Firebase/Auth"));
  return (
    <React.Suspense fallback={<div>Authenticating...</div>}>
      <Auth>{children}</Auth>
    </React.Suspense>
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
