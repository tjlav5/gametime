import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import {
  AuthCheck,
  preloadAuth,
  preloadFirestore,
  preloadFunctions,
  useFirebaseApp,
  useUser,
} from "reactfire";
import { Login } from "./pages/login/login";
import { Games } from "./pages/games/games";

const preloadSDKs = (firebaseApp: any) => {
  return Promise.all([
    preloadFirestore({
      firebaseApp,
      setup: (firestore) => {
        if (true) {
          firestore().useEmulator("localhost", 8080);
        }
      },
    }),
    preloadAuth({
      firebaseApp,
      setup: (auth) => {
        if (true) {
          auth().useEmulator("http://localhost:9099");
        }
      },
    }),
    preloadFunctions({
      firebaseApp,
      setup: (functions) => {
        if (true) {
          functions().useEmulator("localhost", 5001);
        }
      },
    }),
  ]);
};

function App() {
  const firebaseApp = useFirebaseApp();

  preloadSDKs(firebaseApp);

  return (
    <React.Suspense fallback={<div>global fallback...</div>}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/">
            <Games />
          </PrivateRoute>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { data: user } = useUser(undefined, { suspense: true });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default App;
