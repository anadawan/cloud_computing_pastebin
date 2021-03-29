import React from 'react';
import Select from 'react-select'
import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class PasteExpiration extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4">
                <TextField type="date" />
                <TextField type="time" />
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                        />
                    }
                    style={{ "padding-left": "40px" }}
                    label="Expiration date"
                />
            </div>
        );
    }
}