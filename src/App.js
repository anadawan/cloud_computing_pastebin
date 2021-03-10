import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// Main page
import MainPage from "./components/index"

// Accounts
import LoginPage from "./components/account/login"
import LostPassword from "./components/account/lost_password"
import RegisterPage from "./components/account/register"

// Common
import NotFoundPage from "./components/common/404"
import Sidebar from "./components/common/sidebar/sidebar"
class App extends Component {
  render() {
    return (
      <Router>
        <div className={"app"}>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/lostpwd" component={LostPassword} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;