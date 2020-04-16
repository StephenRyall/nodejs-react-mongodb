import React from "react";
import Dashboard from "./components/dashboard/index";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './modules/privateRoute';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;