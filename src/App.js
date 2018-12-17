import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingPageView from './views/LandingPageView';
import LoginView from './views/LoginView';
import './styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.history.push('/login');
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPageView} />
        <Route path="/login" component={LoginView} />
      </div>
    );
  }
}

export default withRouter(App);
