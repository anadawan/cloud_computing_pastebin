import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";
import "../../../styles/sidebar.css"

class SBLog extends Component {
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
                            <MenuItem>Login</MenuItem>
                            <MenuItem>Lost password</MenuItem>
                            <MenuItem>Account Settings</MenuItem>
                        </SubMenu>
                        <SubMenu title="Pastes" icon={<Icons.FaRegStickyNote />}>
                            <MenuItem>Public</MenuItem>
                            <MenuItem>New Paste</MenuItem>
                            <MenuItem>My Pastes</MenuItem>
                        </SubMenu>
                        <SubMenu title="Help" icon={<Icons.FaHeading />}>
                            <MenuItem>Support</MenuItem>
                            <MenuItem>How to use</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <MenuItem style={{ textAlign: "center" }}>Copyright (C) Pastebean</MenuItem>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}


export default SBLog;