/*index.jsx*/
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Divider } from '@material-ui/core';
import { Login } from 'react-cognito/src/Login.jsx'
import PropTypes from 'prop-types';

class LoginForm extends Component {
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
        //console.log("Props : ", this.props);
        this.props.clearCache();
    }
    render() {
        console.log(this)
        return (
            <div style={{ width: "40%", margin: "0 auto", padding: "40px" }}>
                <br />
                <h3>Login 🔑</h3>
                <Divider />
                <br />
                <form onSubmit={this.onSubmit}>
                    <div>{this.props.error}</div>
                    <div>{this.state.email}</div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Email address  </label>
                        <input placeholder="Username" id="username" class="form-control" value={this.state.username} onChange={this.changeUsername} required />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Password  </label>
                        <input placeholder="Username" type="password" id="password" class="form-control" onChange={this.changePassword} required />
                    </div>
                    <Button variant="outlined" type="submit" style={{ width: "100%" }}> Login </Button>
                </form>
            </div >
        );
    }
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    clearCache: PropTypes.func,
    username: PropTypes.string,
    error: PropTypes.string,
    email: PropTypes.string,
};

export default LoginForm;