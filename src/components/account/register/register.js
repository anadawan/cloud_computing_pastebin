/*index.jsx*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import { Divider } from '@material-ui/core';
import { registerUser, CognitoState } from 'react-cognito';
import { withRouter, Redirect } from "react-router"

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            username: '',
            password: '',
            email: '',
        };
    }

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    onSubmit = (event) => {
        const { store } = this.context;
        const state = store.getState();
        const userPool = state.cognito.userPool;
        const config = state.cognito.config;
        event.preventDefault();
        registerUser(userPool, config, this.state.username, this.state.password, {
            email: this.state.email,
        }).then(
            (action) => {
                store.dispatch(action);
                this.props.history.push('/');
            },
            error => this.setState({ error }));
    }

    changeUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    render() {

        return (
            <div style={{
                width: "40%",
                margin: "0 auto",
                padding: "40px"
            }}>
                <br />
                <h3>Register 👤</h3>
                <Divider />
                <br />
                <form onSubmit={this.onSubmit}>
                    <div>{this.state.error}</div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Email address  </label>
                        <input type="email" id="email" onChange={this.changeEmail} required className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Username  </label>
                        <input id="username" onChange={this.changeUsername} required className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Password  </label>
                        <input type="password" onChange={this.changePassword} required id="password" className="form-control" />
                    </div>
                    <Button variant="outlined" type="submit" style={{ width: "100%" }}>Register</Button>
                </form>
            </div >
        );
    }
};

RegisterPage.contextTypes = {
    store: PropTypes.object,
};

export default withRouter(RegisterPage);