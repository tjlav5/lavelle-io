import * as React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  RouteProps,
  Redirect,
  useLocation
} from "react-router-dom";
import { AuthCheck, FirebaseAppProvider, useUser, useAuth } from "reactfire";

const AppProviders: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider
      firebaseConfig={{
        apiKey: "AIzaSyB3Ttk-K5sVkJ0FL_lXJ4EflWKt6GEzSXw",
        authDomain: "lavelle-io-1310.firebaseapp.com",
        databaseURL: "https://lavelle-io-1310.firebaseio.com",
        projectId: "lavelle-io-1310",
        storageBucket: "lavelle-io-1310.appspot.com",
        messagingSenderId: "431426547682",
        appId: "1:431426547682:web:eceef6d0c486f4164c53bb"
      }}>
      {children}
    </FirebaseAppProvider>
  );
};

export const App: React.FC = () => {
  const Login = React.lazy(() => import("./modules/Login/index"));

  return (
    <AppProviders>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <div>HOME</div>
              </Route>

              <Route path="/public">
                <div>PUBLIC</div>
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <PrivateRoute path="/protected">
                <ProtectedModule />
              </PrivateRoute>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </AppProviders>
  );
};

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const ProtectedModule: React.FC = () => {
  const auth = useAuth();
  const user: any = useUser();
  return (
    <>
      <div>{user && user.email}</div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <AuthCheck
          fallback={
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          }>
          {children}
        </AuthCheck>
      )}
    />
  );
};
