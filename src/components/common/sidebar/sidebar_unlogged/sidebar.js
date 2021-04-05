import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "../../../../styles/sidebar.css"
import React, { Component } from 'react';
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';


class SBUnlog extends Component {
    render() {
        return (
            <ProSidebar collapsed={true}>
                <ReactTooltip />
                <SidebarHeader>
                    <div
                        style={{
                            //padding: '24px', if collapsed
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
                            <MenuItem>Register<Link to="/register" /></MenuItem>
                            <MenuItem>Login<Link to="/login" /></MenuItem>
                            <MenuItem>Lost password<Link to="/lostpwd" /></MenuItem>
                        </SubMenu>
                        <SubMenu title="Pastes" icon={<Icons.FaRegStickyNote />}>
                            <MenuItem>Public<Link to="/paste/public" /></MenuItem>
                            <MenuItem>New Paste<Link to="/paste/new" /></MenuItem>
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


export default SBUnlog;