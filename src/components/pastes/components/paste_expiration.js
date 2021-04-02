import React from 'react';
import { TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class PasteExpiration extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4">
                <label class="form-label">Paste expiration</label><br />
                <TextField type="date" style={{ width: '30%' }} disabled={!this.props.expiration} onChange={this.props.dateChanged} />
                <TextField type="time" style={{ width: '30%' }} disabled={!this.props.expiration} onChange={this.props.timeChanged} />
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            onChange={this.props.toggleExpiration}
                            checked={this.props.expiration}
                        />
                    }
                    style={{ "padding-left": "40px" }}
                    label="Expiration date"
                />
            </div>
        );
    }
}