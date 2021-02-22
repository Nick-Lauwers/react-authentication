import React from 'react';
import { Link } from 'react-router-dom';

import './Template.css';

const Template = (props) => (
  <div className='template col-md-6'>
    <Link to={props.link} target='_blank' rel='noreferrer' />
  </div>
);

export default Template;