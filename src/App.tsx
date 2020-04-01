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

export const App: React.FC = () => {
  return (
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

        <Switch>
          <Route path="/public">
            <div />
          </Route>
          <Route path="/login">
            <div />
          </Route>
          <PrivateRoute path="/protected">
            <div />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
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
