import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import * as ROUTES from '../../../../constants/routes';

import './HeaderLinks.css';

const HeaderLinks = (props) => {
	const handleClick = () => {
		axios.delete('http://localhost:3001/logout', { withCredentials: true })
			.then(response => {
				props.handleLogout();
				props.history.push(ROUTES.HOME);
			})
			.catch(error => console.log(error))
	};

	return (
		<ol>
			{ props.isLoggedIn ? 
				<li><button onClick={handleClick}>Log Out</button></li> :
				<>
					<li><Link to={ROUTES.SIGN_UP}>Create Website</Link></li>
					<li><Link to={ROUTES.LOGIN}>Log In</Link></li>
				</>
			}
		</ol>
	);
};

export default HeaderLinks;