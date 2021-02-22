import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { LOGIN } from '../../constants/routes';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest}
           render={props => isLoggedIn ? <Component {...props} /> : 
                                         <Redirect to={LOGIN} /> } />
  );
};

export default PrivateRoute;