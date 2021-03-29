import { useHistory, useLocation } from "react-router-dom";
import { useAuth, useFirestore } from "reactfire";

export const Login: React.FC = () => {
  const auth = useAuth();
  let history = useHistory();
  let location = useLocation<{ from?: {} }>();

  let { from } = location.state;
  // || { from: { pathname: "/" } };

  let login = () => {
    auth.signInAnonymously();
    history.replace(from ?? { pathname: "/" });
  };

  return (
    <div>
      <button onClick={login}>login</button>
    </div>
  );
};
