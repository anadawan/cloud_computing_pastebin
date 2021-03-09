import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import Sidebar from "./components/sidebar/sidebar"
class App extends React.Component {
  render() {
    return (
      <Sidebar />
    )
  }
}

export default App;