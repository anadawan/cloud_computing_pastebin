import React from 'react';
import Select from 'react-select'

export default class PasteContent extends React.Component {
    render() {
        return (
            <div class="form-outline mb-4">
                <label class="form-label" for="form1Example2">Content  </label>
                <textarea id="paste_code" class="form-control" style={{ height: "250px" }} onChange={this.props.contentChanged} onKeyDown={this.props.tabPressed} />
                <Select id="paste_language" options={this.props.options} onChange={this.props.languageChanged}></Select>
            </div>
        );
    }
}