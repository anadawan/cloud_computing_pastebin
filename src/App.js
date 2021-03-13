/* App.js */

// CSS
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports
import React from "react";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

// Main page
import MainPage from "./components/index"

// Accounts
import LoginPage from "./components/account/login/login"
import LostPassword from "./components/account/lost_password"
import RegisterPage from "./components/account/register"

// Pastes
import MyPaste from "./components/pastes/my"
import NewPaste from "./components/pastes/new"
import PublicPaste from "./components/pastes/public"

// Support
import SupportPage from "./components/support/support"
import HelpPage from "./components/support/help"

// Common
import NotFoundPage from "./components/common/404"
import Sidebar from "./components/common/sidebar/sidebar"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={"app"}>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/lostpwd" component={LostPassword} />
            <Route exact path="/paste/create" component={NewPaste} />
            <Route exact path="/paste/my" component={MyPaste} />
            <Route exact path="/paste/public" component={PublicPaste} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;