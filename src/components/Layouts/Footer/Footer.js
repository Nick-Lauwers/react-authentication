import React from 'react';
import { Link } from 'react-router-dom';

import FooterLinkFamily from './FooterLinkFamily/FooterLinkFamily';

import * as ROUTES from '../../../constants/routes';

import './Footer.css';

const footerLinkFamilies = [
	{id: 1, family: 'Quick Links', links: [{id: 1, location: 'Home', route: ROUTES.HOME},
																				 {id: 2, location: '#FitnessGuru', route: '#'},
																				 {id: 3, location: 'Community', route: '#'}]},
	{id: 2, family: 'Products', links: [{id: 1, location: 'Website', route: '#'},
															 				{id: 2, location: 'Checkout', route: '#'},
															 				{id: 3, location: 'Marketplace', route: '#'}]},
	{id: 3, family: 'About Us', links: [{id: 1, location: 'Careers', route: '#'},
															 				{id: 2, location: 'Live', route: '#'},
															 				{id: 3, location: 'Webinars', route: '#'}]}															 
];

const Footer = () => {

	const footerLinkFamilyList = footerLinkFamilies.map((footerLinkFamily) =>
    <FooterLinkFamily key={footerLinkFamily.id}
		                  family={footerLinkFamily.family}
		                  links={footerLinkFamily.links} />
  );


	return (
	  <div className='footer content'>
	  	<div className='row'>
	  		<div className='col-md-5'>
	  			<Link to={ROUTES.HOME} className='logo'>fitnessguru</Link>
	  		</div>

	  		<div className='col-md-7'>
	  			<div className='row'>
	  				{footerLinkFamilyList}
			  	</div>
		  	</div>
	  	</div>
	  </div>
	);
};

export default Footer;