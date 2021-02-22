import React from 'react';

import './Burger.css';

const Burger = ({ active, setActive }) => (
	<div active={active} 
			 onClick={() => setActive(!active)}
			 className='burger'>
    <div className={active ? 'active' : ''} />
    <div className={active ? 'active' : ''} />
    <div className={active ? 'active' : ''} />
  </div>
);

export default Burger;