/*index.jsx*/
import React from "react";
import Button from "@material-ui/core/Button"
import { Divider } from '@material-ui/core';

const LostPassword = () => {
    return (
        <div style={{
            width: "40%",
            margin: "0 auto",
            padding: "40px"
        }}>
            <br />
            <h3>Lost Password ❓</h3>
            <Divider />
            <br />
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example1">Email address</label>
                    <input type="email" id="form1Example1" class="form-control" />
                </div>
                <Button variant="outlined" style={{
                    width: "100%",
                }}>
                    Send Mail
                </Button>
            </form>
        </div >
    );
};

export default LostPassword;