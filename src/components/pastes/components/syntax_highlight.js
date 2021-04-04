import React, { Component } from 'react'

export default class SyntaxHighlight extends Component {
    // Class for the syntaxt highlighter rendering.
    render() {
        return (
            <div className="form-outline mb-4">
                <label className="form-label" >Syntax Highlighted  </label>
                <div id="render_code" style={{ height: "100%" }} readOnly={true} />
            </div>
        )
    }
}