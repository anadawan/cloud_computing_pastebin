import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from "./components/common/sidebar/sidebar"
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./components/index"
import LoginPage from "./components/login/login"
import RegisterPage from "./components/register/register"
import NotFoundPage from "./components/common/404"
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
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;