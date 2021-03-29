import React, { Component } from 'react'

export default class SyntaxHighlight extends Component {
    // Class for the syntaxt highlighter rendering.
    render() {
        return (
            <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Syntax Highlighted  </label>
                <div id="render_code" style={{ height: "100%" }} readOnly={true} />
            </div>
        )
    }
}