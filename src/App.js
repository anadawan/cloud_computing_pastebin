import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from "./components/common/sidebar/sidebar"
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./components/index"
class App extends Component {
  render() {
    return (
      <Router>
        <div className={`app`}>
          <Sidebar />
          <Route exact path="/" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default App;