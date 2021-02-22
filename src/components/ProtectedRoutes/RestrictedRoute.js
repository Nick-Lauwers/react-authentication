import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { DASHBOARD } from '../../constants/routes';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest}
           render={props => isLoggedIn ? <Redirect to={DASHBOARD} /> : 
                                         <Component {...props} /> } />
  );
};

export default RestrictedRoute;