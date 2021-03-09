import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import SBUnlog from "./components/sidebar_unlogged/sidebar"
import SBLog from "./components/sidebar_logged/sidebar"

class App extends React.Component {
  render() {
    if (!this.context.token) {
      return (
        <SBUnlog />
      )
    }
    else {
      return (
        <SBLog />
      )
    }
  }
}

export default App;