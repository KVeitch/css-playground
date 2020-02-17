/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      hasError: false,
    };
  }

  render = () => {
    return (
      <form className="form__login">
        <div className="form__div--container">
          <input className="form__input--name" required autoComplete="off" />
          <label htmlFor="form__input--name" className="input__name--label label">
            <span className="content-name">UserID</span>
          </label>
        </div>
        <div className="form__div--container">
          <input type="password" className="form__input--pass" required autoComplete="off" />
          <label htmlFor="form__input--name" className="input__pass--label label">
            <span className="content-name">Password</span>
          </label>
        </div>
        <button type="button" className="form__login--submit">
          Login
        </button>
      </form>
    );
  };
}

export default LoginForm;
