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
import PublicPaste from "./pastes/public"

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
            <Confirm    >
                <ConfirmEmail />
            </Confirm   >
        </Router>
    </div>
)

const loggedInPage = (user, attributes) => (
    <Router>
        <SidebarLogged />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/lostpwd" component={LostPassword} />
            <Route exact path="/paste/new" component={NewPaste} />
            <Route exact path="/paste/public" component={PublicPaste} />
            <Route exact path="/paste/my" component={MyPaste} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);
const loggedOutPage = () => (
    <Router>
        <SidebarUnlogged />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={loginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/lostpwd" component={LostPassword} />
            <Route exact path="/paste/new" component={NewPaste} />
            <Route exact path="/paste/public" component={PublicPaste} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/help" component={HelpPage} />
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
            console.log("verif email")
            return (emailConfirm());
        case "CONFIRMATION_REQUIRED":
            console.log("conf req")
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