import React from 'react';
import { TextField } from '@material-ui/core';

export default class PasteTags extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4">
                <label class="form-label" for="form1Example1">Past tags  </label><br />
                <TextField id="paste_tags" style={{ width: '60%' }} value={this.props.tags} onChange={this.props.tagsChanged} />
            </div>
        );
    }
}