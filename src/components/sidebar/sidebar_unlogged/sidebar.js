import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "../../../styles/sidebar.css"
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";

class SBUnlog extends Component {
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
                        <Menu iconShape="square">
                            <MenuItem icon={<Icons.FaStickyNote />}>Pastebin</MenuItem>
                        </Menu>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Account" icon={<Icons.FaUserAlt />}>
                            <MenuItem>Login</MenuItem>
                            <MenuItem>Lost password</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <span></span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}


export default SBUnlog;