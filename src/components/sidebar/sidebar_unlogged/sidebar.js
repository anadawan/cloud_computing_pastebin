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
                        <MenuItem icon={<Icons.FaStickyNote />}>Pastebean</MenuItem>
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
                <SidebarFooter>
                    <MenuItem style={{textAlign:"center"}}>Copyright (C) Pastebean</MenuItem>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}


export default SBUnlog;