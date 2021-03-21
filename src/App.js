/* App.js */

// CSS
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Imports
import {
  Login,
} from 'react-cognito';
import React from "react";
import { Component } from "react";
import Dashboard from "./components/dashboard"

class App extends Component {
  render() {
    return (
      <div className={"app"}>
        <Dashboard />
      </div>
    );
    /*return (
      <div className={"app"}>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={loggedOutPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/email/verify" component={ConfirmEmail} />
            <Route exact path="/lostpwd" component={LostPassword} />
            <Route exact path="/paste/create" component={NewPaste} />
            <Route exact path="/paste/my" component={MyPaste} />
            <Route exact path="/paste/public" component={PublicPaste} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );*/
  }
}

export default App;