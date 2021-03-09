
import SBUnlog from "./sidebar_unlogged/sidebar"
import SBLog from "./sidebar_logged/sidebar"
import React, { Component } from 'react';

class Sidebar extends Component {
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

export default Sidebar;