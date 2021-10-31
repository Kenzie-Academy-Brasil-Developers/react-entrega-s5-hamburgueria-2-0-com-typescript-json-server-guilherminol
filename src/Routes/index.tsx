import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
