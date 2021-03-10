import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";
import "../../../../styles/sidebar.css";
import { Link } from "react-router-dom";

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
                            <MenuItem icon={<Icons.FaStickyNote />}>Pastebean<Link to="/" /></MenuItem>
                        </Menu>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="round">
                        <SubMenu title="Account" icon={<Icons.FaUserAlt />}>
                            <MenuItem>Account Settings<Link to="/register" /></MenuItem>
                            <MenuItem>My Pastes<Link to="/pastes/my" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Pastes" icon={<Icons.FaRegStickyNote />}>
                            <MenuItem>Public<Link to="/pastes/public" /></MenuItem>
                            <MenuItem>New Paste<Link to="/pastes/new" /></MenuItem>
                            <MenuItem>My Paste<Link to="/pastes/my" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Help" icon={<Icons.FaHeading />}>
                            <MenuItem>Support<Link to="/support" /></MenuItem>
                            <MenuItem>How to use<Link to="/help" /></MenuItem>
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