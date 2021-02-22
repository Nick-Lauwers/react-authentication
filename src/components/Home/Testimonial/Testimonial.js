import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Testimonial.css';

const Testimonial = (props) => (
  <div className='testimonial col-md-4'>
    <div className='card-testimonial'>
    	<FontAwesomeIcon icon='quote-left' 
    									 size='2x' 
    									 className='quote-testimonial' />

    	<p className='content-testimonial'>{props.content}</p>

	    <div className='details-testimonial'>
        {props.name}<br />
        {props.location}
      </div>
    </div>
  </div>
);

export default Testimonial;