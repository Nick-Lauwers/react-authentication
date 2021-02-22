import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { HOME } from '../../../constants/routes';

import '../Authentication.css';

export const forgotPassword = (email) => {
  return fetch(`http://localhost:3001/forgot-password`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email)
  })
  .then(response => 
    response.json()
   )
  .then(response => {
    console.log(response)
  })
  .catch(console.log)
}

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email:  '',
      errors: ''
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

    const email = this.state.email;

    axios
      .put('http://localhost:3001/forgot-password', 
           { email }, 
           { withCredentials: true })
      .then(response => {
        if (response.data.status === 201) {
          this.setState({ email: '' });
          this.props.history.push(HOME);
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
    return (
      <div className='authentication'>
        <div className='content-authentication'>
          <Link to={HOME} className='logo'>fitnessguru</Link>

          <h1 className='title-authentication'>forgot password</h1>

          <form onSubmit={this.handleSubmit}>
            <div className='form-field'>
              <input type='email'
                     name='email'
                     value={this.state.email}
                     onChange={this.handleChange}
                     required />

              <label htmlFor='email'>Email</label>
            </div>

            <button type='submit' className='button-authentication'>
              Send Reset Link
            </button>
          </form>

          { this.state.errors ? this.handleErrors() : null }
        </div>
      </div>
    );
  }
};

export default ForgotPassword;