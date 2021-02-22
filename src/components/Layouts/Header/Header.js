import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Burger from './Burger/Burger';
import HeaderLinks from './HeaderLinks/HeaderLinks';

import { HOME } from '../../../constants/routes';

import './Header.css';

const Header = (props) => {
	const [active, setActive] = useState(false);

	return (
		<>
			<div className='header'>
				<Link to={HOME} className='logo'>fitnessguru</Link>

				<div className='links-header'>
					<div className='d-block d-md-none'>
						<Burger active={active ? 1 : undefined} setActive={setActive} />
					</div>

					<div className='d-none d-md-block'>
						<HeaderLinks isLoggedIn={props.isLoggedIn} 
												 handleLogout={props.handleLogout} />
					</div>
				</div>
			</div>

			<div className={active ? 'menu-header active' : 'menu-header'}>
				<HeaderLinks isLoggedIn={props.isLoggedIn} 
										 handleLogout={props.handleLogout} />
			</div>
		</>
	);
};

export default Header;

// Buttons, NotLoggedIn, PrivateRoute