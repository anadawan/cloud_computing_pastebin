import logo from './logo.svg';
import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import * as Icons from "react-icons/fa";
import SBUnlog from "./components/sidebar_unlogged/sidebar"
class App extends React.Component {
  render() {
    return (
      <SBUnlog />
      )
  }
}

export default App;