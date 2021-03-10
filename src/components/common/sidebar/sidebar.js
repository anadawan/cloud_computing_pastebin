
import SBUnlog from "./sidebar_unlogged/sidebar"
import SBLog from "./sidebar_logged/sidebar"
import React, { Component } from 'react';
import checkToken from "../token/checkToken";
class Sidebar extends Component {
    render() {
        if (checkToken() === false) {
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

export default Sidebar;