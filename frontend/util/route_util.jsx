import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router"

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default withRouter(Auth);