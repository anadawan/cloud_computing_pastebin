/*
** Main dashboard. Used to redirect for the login phases.
*/

import React, { Component } from 'react'
import CognitoState from 'react-cognito'

// Sidebar
const Sidebar;
const Sidebar_logged_in;
const Sidebar_admin;

// Login
const LoginPage;

// Register
const RegisterPage;
const EmailConfirm;

// Pastes

// If logged in route to logged in page
// If not redirect to logged_out page
const Dashboard = ({ state, user, attributes }) => {
    switch (state) {
        case CognitoState.LOGGED_IN:
            // Route here to pages that are avalaible.
            return loggedInPage(user, attributes);
        case CognitoState.AUTHENTICATED:
        case CognitoState.LOGGING_IN:
            return (
                <div>
                    <img src="ajax-loader.gif" alt="" />
                </div>
            )
        case CognitoState.LOGGED_OUT:
        case CognitoState.LOGIN_FAILURE:
            return loggedOutPage();
        case CognitoState.NEW_PASSWORD_REQUIRED:
            return newPasswordPage();
        case CognitoState.EMAIL_VERIFICATION_REQUIRED:
            return emailVerificationPage();
        case CognitoState.CONFIRMATION_REQUIRED:
            return confirmForm();
        default:
            return (
                <div>
                    <p>Unrecognized cognito state</p>
                </div>
            );
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