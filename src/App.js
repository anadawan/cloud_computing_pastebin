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
class App extends Component {
  render() {
    return (
      <Router>
        <div className={"app"}>
          <Sidebar />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;