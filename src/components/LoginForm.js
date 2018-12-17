import React, { Component } from 'react';

const initalUser = {
  email: '',
  password: ''
};

class LoginForm extends Component {
  state = {
    loginData: initalUser
  };

  handleInputChange = e => {
    this.setState({
      loginData: { ...this.state.loginData, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { email, password } = this.state.loginData;
    return (
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <button className="social-button facebook">
          <span className="social-button-square">
            <i className="fab fa-facebook-f" />
          </span>
          <span className="social-button-text">Login with Facebook</span>
        </button>
        <button className="social-button google">
          <span className="social-button-square">
            <i className="fab fa-google" />
          </span>
          <span className="social-button-text">Login with Google</span>
        </button>
        <p className="or">or</p>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-input"
            value={email}
            placeholder="Enter your email address"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            value={password}
            placeholder="Enter your password"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="disclaimer">Forgot your password? | Register</div>
        <button className="form-submit-button">Login</button>
      </form>
    );
  }
}

export default LoginForm;
