import React from 'react';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class PastePublic extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4">
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                        />
                    }
                    label="Password"    
                />
            </div>
        );
    }
}