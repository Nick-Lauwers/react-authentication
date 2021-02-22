import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { HOME, DASHBOARD } from '../../../constants/routes';

import '../Authentication.css';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:                 props.match.params.email,
      token:                 props.match.params.token,
      password:              '',
      password_confirmation: '',
      errors:                ''
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

    const { email, token, password, password_confirmation } = this.state;

    let user = {
      email:                 email,
      token:                 token,
      password:              password,
      password_confirmation: password_confirmation
    };

    axios
      .put('http://localhost:3001/reset-password', 
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
  
  handleErrors = (props) => {
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

          <h1 className='title-authentication'>password</h1>

          <h2>{this.state.reset_digest}</h2>

          <form onSubmit={this.handleSubmit}>
            <div className='form-field'>
              <input type='password'
                     name='password'
                     // value={password}
                     onChange={this.handleChange}
                     required />

              <label htmlFor='password'>Password</label>
            </div>

            <div className='form-field'>
              <input type='password'
                     name='password_confirmation'
                     // value={password_confirmation}
                     onChange={this.handleChange}
                     required />

              <label htmlFor='password_confirmation'>
                Password Confirmation
              </label>
            </div>

            <button type='submit' className='button-authentication'>
              Reset Password
            </button>
          </form>

          <div>
            { this.state.errors ? this.handleErrors() : null }
          </div>
        </div>
      </div>
    );
  }
};

export default ResetPassword;