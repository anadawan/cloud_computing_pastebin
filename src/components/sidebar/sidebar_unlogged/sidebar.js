import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "../../../styles/sidebar.css"
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";
import { Redirect } from 'react-router-dom'


class SBUnlog extends Component {
    login = () => { window.location.replace("/login") }
    lostpassword = () => { window.location.replace("/lostpassword") }
    render() {
        return (
            <ProSidebar>
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Menu iconShape="round">
                            <MenuItem icon={<Icons.FaStickyNote />}>Pastebean</MenuItem>
                        </Menu>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="round">
                        <SubMenu title="Account" icon={<Icons.FaUserAlt />}>
                            <MenuItem onClick={this.login}>Login</MenuItem>
                            <MenuItem onClick={this.lostpassword}>Lost password</MenuItem>
                        </SubMenu>
                        <SubMenu title="Pastes" icon={<Icons.FaRegStickyNote />}>
                            <MenuItem>Public</MenuItem>
                            <MenuItem>New Paste</MenuItem>
                        </SubMenu>
                        <SubMenu title="Help" icon={<Icons.FaHeading />}>
                            <MenuItem>Support</MenuItem>
                            <MenuItem>How to use</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <MenuItem style={{ textAlign: "center" }}>Copyright (C) Pastebean</MenuItem>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}


export default SBUnlog;