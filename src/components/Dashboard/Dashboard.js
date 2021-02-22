import React from 'react';

import Sidebar from '../Layouts/Sidebar/Sidebar';

const Dashboard = (props) => (
	<div className='customer'>
		<Sidebar />

		<div className='content-customer'>
	    <h1 className='headline-customer'>hola! &#128075;</h1>

	    <p className='paragraph-customer'>
	    	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
	    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
	    	veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
	    	commodo consequat.
	    </p>
	  </div>
	</div>
);

export default Dashboard;