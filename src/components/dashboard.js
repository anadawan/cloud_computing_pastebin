/*
** Main dashboard. Used to redirect for the login phases.
*/

import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import {
    Login,
    Confirm,
} from 'react-cognito';

// Accounts
import ProfilePage from "./account/profile/profile"
import LoginPage from "./account/login/login"
import LostPassword from "./account/password/lost_password"
import RegisterPage from "./account/register/register"
import ConfirmEmail from "./account/register/confirm_email"

// Pastes
import MyPaste from "./pastes/my"
import NewPaste from "./pastes/new"
import GetPaste from "./pastes/get"
import PublicPaste from "./pastes/public"
import EditPaste from "./pastes/edit"

// Support
import SupportPage from "./support/support"
import HelpPage from "./support/help"

// Common
import NotFoundPage from "./common/404"
import SidebarLogged from "./common/sidebar/sidebar_logged/sidebar"
import SidebarUnlogged from "./common/sidebar/sidebar_unlogged/sidebar"
// Main page
import MainPage from "./index"

const loginPage = () => (
    <Login>
        <LoginPage />
    </Login>
)

const emailConfirm = () => (
    <div className={"app"}>
        <Router>
            <SidebarUnlogged />
            <Confirm>
                <ConfirmEmail />
            </Confirm>
        </Router>
    </div>
)

const loggedInPage = (user, attributes) => (
    <Router>
        <Switch>
            <Route exact path="/" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><MainPage  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/profile" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><ProfilePage  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/lostpwd" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><LostPassword  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/paste/new" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><NewPaste  {...props} user={user} attributes={attributes} /></div>} />
            <Route path="/paste/get/:id" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><GetPaste  {...props} user={user} attributes={attributes} /></div>} />
            <Route path="/paste/edit/:id" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><EditPaste  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/paste/public" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><PublicPaste  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/paste/my" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><MyPaste  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/support" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><SupportPage  {...props} user={user} attributes={attributes} /></div>} />
            <Route exact path="/help" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><HelpPage  {...props} user={user} attributes={attributes} /></div>} />
            <Route render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarLogged /><NotFoundPage  {...props} user={user} attributes={attributes} /></div>} />
        </Switch>
    </Router>
);
const loggedOutPage = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><MainPage /></div>} />
            <Route exact path="/login" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged />{loginPage()}</div>} />
            <Route exact path="/register" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><RegisterPage /></div>} />
            <Route exact path="/lostpwd" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><LostPassword /></div>} />
            <Route path="/paste/get/:id" render={(props) => <GetPaste {...props} />} />
            <Route exact path="/paste/new" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><NewPaste /></div>} />
            <Route exact path="/paste/public" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><PublicPaste /></div>} />
            <Route exact path="/support" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><SupportPage /></div>} />
            <Route exact path="/help" render={(props) => <div style={{ display: "flex", width: "100%" }}><SidebarUnlogged /><HelpPage /></div>} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);
// If logged in route to logged in page
// If not redirect to logged_out page
const BaseDashboard = ({ state, user, attributes }) => {
    switch (state) {
        case "LOGGED_IN":
            // Route here to pages that are avalaible.
            return (loggedInPage(user, attributes));
        case "AUTHENTICATED":
            return (null);
        case "LOGGING_IN":
            return (loggedOutPage());
        case "LOGGED_OUT":
            return (loggedOutPage());
        case "LOGIN_FAILURE":
            return (null);
        case "NEW_PASSWORD_REQUIRED":
            return (null);
        case "EMAIL_VERIFICATION_REQUIRED":
            return (emailConfirm());
        case "CONFIRMATION_REQUIRED":
            return (emailConfirm());
        default:
            return (null);
    }
}

BaseDashboard.propTypes = {
    user: PropTypes.object,
    attributes: PropTypes.object,
    state: PropTypes.string,
};

const mapStateToProps = state => ({
    state: state.cognito.state,
    user: state.cognito.user,
    attributes: state.cognito.attributes,
});


const Dashboard = connect(mapStateToProps, null)(BaseDashboard);

export default Dashboard;