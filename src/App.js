import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faDesktop, faDollarSign, faStream, faMarker, faLifeRing, faQuoteLeft, faGlasses, faUser } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

import SignUp from './components/Authentication/SignUp/SignUp';
import Login from './components/Authentication/Login/Login';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Templates from './components/Templates/Templates';
import Account from './components/Account/Account';
import PrivateRoute from './components/ProtectedRoutes/PrivateRoute';
import RestrictedRoute from './components/ProtectedRoutes/RestrictedRoute';

import * as ROUTES from './constants/routes';

import './App.css';

library.add(
	faArrowRight, faDesktop, faDollarSign, faStream, faMarker, faLifeRing, 
	faQuoteLeft, faGlasses, faUser, faComments
);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			user:       { }
		};
	};

	componentDidMount() {
		this.loginStatus();
	};

	loginStatus = () => {
		axios.get('http://localhost:3001/logged-in', { withCredentials: true })
			.then(response => {
				if (response.data.is_logged_in) {
					this.handleLogin(response);
				} else {
					this.handleLogout();
				}
			})
			.catch(error => console.log('API Errors: ', error))
	}

	handleLogin = (data) => {
		this.setState({
			isLoggedIn: true,
			user: 			data.user
		});
	};

	handleLogout = () => {
		this.setState({
			isLoggedIn: false,
			user: 			{ }
		});
	};

  render() {
    return (
      <Router>
      	<Route exact path={ROUTES.HOME}
	 					 	 			 render={props => 
    			 					   	 		   (<Home {...props}
    			 					   								handleLogout={this.handleLogout}
    			 						 			  				isLoggedIn={this.state.isLoggedIn} />)} />

			  <Route path={ROUTES.SIGN_UP} 
			  			 render={props => 
			  			 					 (<SignUp {...props} 
			  			 					 	 				handleLogin={this.handleLogin} />)} />

			  <Route path={ROUTES.LOGIN} 
			  			 render={props => 
			  			 					 (<Login {...props} 
			  			 					 	 			 handleLogin={this.handleLogin} />)} />

			  <Route path={ROUTES.RESET_PASSWORD} 
			  			 render={props => 
			  			 					 (<ResetPassword {...props} 
			  			 					 	 							 handleLogin={this.handleLogin} />)} />			 					 

				<RestrictedRoute path={ROUTES.FORGOT_PASSWORD} 
												 component={ForgotPassword}
												 isLoggedIn={this.state.isLoggedIn} />

			  <PrivateRoute path={ROUTES.DASHBOARD} 
			  							component={Dashboard} 
			  							isLoggedIn={this.state.isLoggedIn} />	

			  <PrivateRoute path={ROUTES.TEMPLATES} 
			  							component={Templates} 
			  							isLoggedIn={this.state.isLoggedIn} />

			  <PrivateRoute path={ROUTES.ACCOUNT} 
			  							component={Account} 
			  							isLoggedIn={this.state.isLoggedIn} />
	    </Router>  
    );
  }
}

export default App;