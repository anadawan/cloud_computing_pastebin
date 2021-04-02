import React from 'react';

import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class PastePassword extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4">
                <TextField type="password" style={{ width: '60%' }} disabled={!this.props.password} onChange={this.props.passwordChanged}/>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={this.props.password}
                            onChange={this.props.togglePassword}
                        />
                    }
                    label="Password"
                    style={{ "padding-left": "40px" }}
                />
            </div>
        );
    }
}