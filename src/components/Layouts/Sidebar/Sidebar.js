import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as ROUTES from '../../../constants/routes';

import './Sidebar.css';

const Sidebar = () => (
	<div className='nav-dashboard'>
		<Link to={ROUTES.DASHBOARD} className='logo'>fitnessguru</Link>

		<div className='navlist-dashboard'>
			<ol>
				<li>
					<NavLink to={ROUTES.DASHBOARD} activeClassName='active'>
						<FontAwesomeIcon icon='glasses' className='icon-dashboard' /> 
		        Dashboard
					</NavLink>
				</li>

				<li>
					<NavLink to={ROUTES.TEMPLATES} activeClassName='active'>
						<FontAwesomeIcon icon='desktop' className='icon-dashboard' /> 
		        Templates
					</NavLink>
				</li>

				<li>
					<NavLink to={ROUTES.ACCOUNT} activeClassName='active'>
						<FontAwesomeIcon icon='user' className='icon-dashboard' /> 
			      Account
					</NavLink>
				</li>
			</ol>
		</div>
	</div>
);

export default Sidebar;