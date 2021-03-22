import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";
import "../../../../styles/sidebar.css";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

class SBLog extends Component {
    render() {
        return (
            <ProSidebar collapsed={true}>
                <ReactTooltip />
                <SidebarHeader>
                    <div
                        style={{
                            //padding: '24px', it collapsed
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
                            <MenuItem data-tip="Pastebean" icon={<Icons.FaStickyNote />}>Pastebean<Link to="/" /></MenuItem>
                        </Menu>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="round">
                        <SubMenu title="Account" icon={<Icons.FaUserAlt />}>
                            <MenuItem>Account Settings<Link to="/profile" /></MenuItem>
                            <MenuItem>My Pastes<Link to="/paste/my" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Pastes" icon={<Icons.FaRegStickyNote />}>
                            <MenuItem>Public<Link to="/paste/public" /></MenuItem>
                            <MenuItem>New Paste<Link to="/paste/new" /></MenuItem>
                            <MenuItem>My Paste<Link to="/paste/my" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Help" icon={<Icons.FaHeading />}>
                            <MenuItem>Support<Link to="/support" /></MenuItem>
                            <MenuItem>How to use<Link to="/help" /></MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        );
    }
}


export default SBLog;