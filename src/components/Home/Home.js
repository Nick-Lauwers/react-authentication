import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import WebsitePreview from '../../assets/website-preview.png';
import Feature from './Feature/Feature';
import Testimonial from './Testimonial/Testimonial';

import { SIGN_UP } from '../../constants/routes';

import './Home.css';

const features = [ 
  {id: 1, icon: 'desktop', title: 'Tech-enabled', description: 'We use the most modern technologies in web development. Our sites are not only well-designed, but also fast.'},
  {id: 2, icon: 'dollar-sign', title: 'Allow payments', description: 'fitnessguru directly integrates with Stripe, so that you can charge clients with little to no hassle.'},
  {id: 3, icon: 'stream', title: 'Connected with inventory', description: 'Sell exercise routines, nutrition plans, consultations, and other products and services directly from your site.'},
  {id: 4, icon: ['far', 'comments'], title: 'Reservations', description: 'Allow new and existing clients to reserve individual sessions.'},
  {id: 5, icon: 'marker', title: 'Constant updates', description: 'We are always developing new features. If you have any suggestions, feel free to drop us a line.'},
  {id: 6, icon: 'life-ring', title: 'First class support', description: 'Our customer success team is always available to help.'}
];

const testimonials = [
  {id: 1, name: 'Heather Benett', location: 'East Hampton, NY', content: 'I love fitnessguru! Had to rush earlier this year when I went fully online and they were the most helpful. Everything is super easy!'},
  {id: 2, name: 'Alex Texeira', location: 'San Rafael, CA', content: 'I use fitnessguru and love it! They built our site. I have no website experience and am able to update everything.'},
  {id: 3, name: 'Andrew Norris', location: 'Detroit, MI', content: 'Without a doubt, I recommend fitnessguru. Friendly staff, they make sure your site gets up and running. If you have questions, they are always willing to respond. I made the switch earlier this year and am super happy with the site.'}
];

const Home = (props) => {
  const featureList = features.map((feature) =>
    <Feature key={feature.id} 
             icon={feature.icon} 
             title={feature.title} 
             description={feature.description} />
  );

  const testimonialList = testimonials.map((testimonial) =>
    <Testimonial key={testimonial.id}
                 name={testimonial.name}
                 location={testimonial.location}
                 content={testimonial.content} />
  );

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} 
              handleLogout={props.handleLogout} />

      <div className='home'>
        <div className='content'>
          <div className='row'>
            <div className='col-md-11'> 
              <h1 className='headline-home'>
                Personal trainer websites <br />

                <span className='sub-headline-home'>
                  optimized for e-commerce.
                </span>
              </h1>
            </div>

            <div className='col-md-6'>
              <p className='description-home'>
                Simple tools for your big ideas. Start your free website trial 
                today, no credit card required.
              </p>
            </div>
          </div>

          <Link to={SIGN_UP} className='button-home'>
            Create Website
            <FontAwesomeIcon icon='arrow-right' className='icon-button-home' />
          </Link>

          <img src={WebsitePreview} 
               alt='fitnessguru preview.' 
               className='website-preview-home' />
        </div>

        <div className='background-home'>
          <div className='angle-background-home'>
            <svg viewBox='0 0 100 100' 
                 preserveAspectRatio='none' 
                 className='top-angle-home'>
              <polygon points='0,100 100,0 100,100' />
            </svg>
          </div>

          <div className='background-content-home'>
            <div className='content'>
              <div className='row'>
                <div className='col-md-11'>
                  <h3 className='sub-byline-home'>Why fitnessguru?</h3>

                  <h2 className='byline-home'>
                    More than a website.
                  </h2>
                </div>

                <div className='col-md-6'>
                  <p className='description-home'>
                    fitnessguru is the fastest and easiest way to have a direct 
                    sales channel for your fitness business. Build your website 
                    in minutes and quickly enable all the integrations you need.
                  </p>
                </div>
              </div>

              <div className='features-home row'>
                {featureList}
              </div>

              <h2 className='byline-home'>Customer stories.</h2>
              
              <div className='row'>
                {testimonialList}
              </div>
            </div>
          </div>

          <div className='angle-background-home'>
            <svg viewBox='0 0 100 100' 
                 preserveAspectRatio='none'
                 className='bottom-angle-home'>
              <polygon points='100,0 0,100 0,0' />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;