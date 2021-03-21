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
            error: '',
            verificationCode: '',
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.verificationCode)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                this.setState({ error });
            });
    }

    onResend = (event) => {
        event.preventDefault();
        this.props.onResend()
            .then((user) => {
                this.setState({ error: 'Code resent' });
            })
            .catch((error) => {
                this.setState({ error });
            });

    }

    changeVerificationCode = (event) => {
        this.setState({ verificationCode: event.target.value });
    }
    render() {
        return (
            <div style={{ width: "40%", margin: "0 auto", padding: "40px" }}>
                <br />
                <h3>Mail Confirm 🔑</h3>
                <Divider />
                <br />
                <form onSubmit={this.onSubmit}>
                    <div>{this.state.error}</div>
                    <label>
                        Verification Code
                        <input placeholder="code" style={{ width: "100%" }} onChange={this.changeVerificationCode} required />
                    </label>
                    <Button type="submit" variant="outlined" type="submit" style={{ width: "100%" }}>Submit</Button>
                    <Button type="button" variant="outlined" style={{ width: "100%" }} onClick={this.onResend}>Resend code</Button>
                    <Button type="button" variant="outlined" style={{ width: "100%" }} onClick={this.props.onCancel}>Cancel</Button>

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