import React from 'react';
import { Link } from 'react-router-dom';

import './FooterLinkFamily.css';

const FooterLinkFamily = (props) => {
	const linkList = props.links.map((link) =>
    <li key={link.id}><Link to={link.route}>{link.location}</Link></li>
  );

  return (
	  <div className='col-md-4'>
			<div className='subtitle-footer'>{props.family}</div>
			<ol className='links-footer'>{linkList}</ol>
		</div>
	);
};

export default FooterLinkFamily;