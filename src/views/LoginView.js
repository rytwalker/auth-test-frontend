import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginView extends Component {
  render() {
    return (
      <div className="LoginView">
        <LoginForm />
      </div>
    );
  }
}

export default LoginView;
