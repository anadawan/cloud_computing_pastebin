import React from 'react';

export default class PasteTitle extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4" style={{ width: "100%" }}>
                <label class="form-label" for="form1Example1">Past title  </label>
                <input id="paste_title" class="form-control" onChange={this.props.titleChanged} />
            </div>
        )
    }
}