import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { HOME, DASHBOARD } from '../../../constants/routes';

import '../Authentication.css';

class SignUp extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		email: 								 '',
  		password: 						 '',
  		password_confirmation: '',
  		errors: 							 ''
  	};
  };

  handleChange = (event) => {
  	const { name, value } = event.target;

  	this.setState({
  		[name]: value
  	});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, password_confirmation } = this.state;

    let user = {
      email:                 email,
      password:              password,
      password_confirmation: password_confirmation
    };

    axios
      .post('http://localhost:3001/users', 
            { user }, 
            { withCredentials: true })
      .then(response => {
        if (response.data.status === 201) {
          this.props.handleLogin(response.data);
          this.props.history.push(DASHBOARD);
        } else {
          this.setState({ errors: response.data.errors });
        }
      })
      .catch(error => console.log('API Errors: ', error))
  };
  
  handleErrors = () => {
    return (
      <div className='alert alert-danger'>
        <ul>
          { this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    );
  };

  render() {
  	const { email, password, password_confirmation } = this.state;

  	return (
      <div className='authentication'>
        <div className='content-authentication'>
          <Link to={HOME} className='logo'>fitnessguru</Link>

          <h1 className='title-authentication'>sign up</h1>

      		<form onSubmit={this.handleSubmit}>
            <div className='form-field'>
        			<input type='email'
        						 name='email'
        						 value={email}
        						 onChange={this.handleChange}
                     required />

              <label htmlFor='email'>Email</label>
            </div>

            <div className='form-field'>
        			<input type='password'
        						 name='password'
        						 value={password}
        						 onChange={this.handleChange}
                     required />

              <label htmlFor='password'>Password</label>
            </div>

            <div className='form-field'>
              <input type='password'
                     name='password_confirmation'
                     value={password_confirmation}
                     onChange={this.handleChange}
                     required />

              <label htmlFor='password_confirmation'>
                Password Confirmation
              </label>
            </div>

      			<button type='submit' className='button-authentication'>
              Sign Up
            </button>
      		</form>

          { this.state.errors ? this.handleErrors() : null }
        </div>
      </div>
  	);
  }
};

export default SignUp;