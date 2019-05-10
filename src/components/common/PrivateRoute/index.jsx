import React from 'react';
import PT from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isUserSignedIn, ...rest }) => (
  <Route {...rest} render={(props) => (
    isUserSignedIn
      ? <Component {...props} />
      : <Redirect to="/login" />
  )} />
);

PrivateRoute.propTypes = {
  component: PT.func,
  isUserSignedIn: PT.bool,
};

export default PrivateRoute;
