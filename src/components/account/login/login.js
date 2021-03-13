/*index.jsx*/
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Divider } from '@material-ui/core';

class LoginForm extends Component {
    // Sets props values for login form.
    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            username: props.username,
            password: '',
        };
    }

    // OnSubmit
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username, this.state.password);
    }

    // changeUsername
    changeUsername = (event) => {
        this.setState({ username: event.target.value })
    }
    // changePassword
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    // componentWillUnmount
    componentWillUnmount = () => {
        this.props.clearCache();
    }
    render() {
        return (
            <div style={{ width: "40%", margin: "0 auto", padding: "40px" }}>
                <br />
                <h3>Login 🔑</h3>
                <Divider />
                <br />
                <form onSubmit={this.onSubmit}>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="password">Email address  </label>
                        <input type="email" id="password" class="form-control" value={this.state.username} onChange={this.changeUsername} required />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="password">Password  </label>
                        <input type="password" id="password" class="form-control" onChange={this.changePassword} required />
                    </div>
                    <Button variant="outlined" type="submit" style={{ width: "100%" }}> Login </Button>
                </form>
            </div >
        );
    }
};

export default LoginForm;