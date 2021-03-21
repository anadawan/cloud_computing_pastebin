/*index.jsx*/
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Divider } from '@material-ui/core';
import { Login } from 'react-cognito/src/Login.jsx'
import PropTypes from 'prop-types';

class ConfirmEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            username: props.username,
            password: '',
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username, this.state.password);
    }

    changeUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    componentWillUnmount = () => {
        this.props.clearCache();
    }

    render() {
        return (
            <div style={{ width: "40%", margin: "0 auto", padding: "40px" }}>
                <br />
                <h3>Mail Confirm 🔑</h3>
                <Divider />
                <br />
                <form onSubmit={this.onSubmit}>
                    <div>{this.props.error}</div>
                    <div>{this.state.email}</div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="password">Email address  </label>
                        <input placeholder="Username" type="email" id="password" class="form-control" value={this.state.username} onChange={this.changeUsername} required />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="password">Password  </label>
                        <input placeholder="Username" type="password" id="password" class="form-control" onChange={this.changePassword} required />
                    </div>
                    <Button variant="outlined" type="submit" style={{ width: "100%" }}> Login </Button>
                </form>
            </div >
        );
    }
};

ConfirmEmail.propTypes = {
    onSubmit: PropTypes.func,
    clearCache: PropTypes.func,
    username: PropTypes.string,
    error: PropTypes.string,
    email: PropTypes.string,
};

export default ConfirmEmail;