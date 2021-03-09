import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";

class SBUnlog extends React.Component {
    render() {
        return (
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<Icons.FaGem />}>Home</MenuItem>
                    <SubMenu title="Account" icon={<Icons.FaUserAlt />}>
                        <MenuItem>Login</MenuItem>
                        <MenuItem>Lost password</MenuItem>
                    </SubMenu>
                </Menu>
                <SidebarFooter>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}


export default SBUnlog;