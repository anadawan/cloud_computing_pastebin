/*index.jsx*/
import React from "react";
import Button from "@material-ui/core/Button"
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

const LoginPage = () => {
    return (
        <div style={{
            width: "40%",
            margin: "0 auto",
            padding: "40px"
        }}>
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example1">Email address  </label>
                    <input type="email" id="form1Example1" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example2">Password  </label>
                    <input type="password" id="form1Example2" class="form-control" />
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Remember me" />
                    </div>
                </div>
                <Button variant="outlined" style={{
                    width: "100%",
                }}>
                    Login
                </Button>
            </form>
        </div >
    );
};

export default LoginPage;