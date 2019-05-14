import React from 'react';
import PT from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isUserSignedIn, ...rest }) => (
  <Route {...rest} render={(props) => isUserSignedIn && <Component {...props} />} />
);

PrivateRoute.propTypes = {
  component: PT.func,
  isUserSignedIn: PT.bool,
};

export default PrivateRoute;
