/*new.js*/

import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
import React from "react";
import Button from "@material-ui/core/Button"
import { Divider } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Select from 'react-select'
import ReactDOM from 'react-dom';;

function textChanged() {
    // Load values and update highlighted code.
    let code = document.getElementById("paste_code");
    const element = <SyntaxHighlighter style={dark} language={document.getElementById("paste_language").innerText}>{code.value}</SyntaxHighlighter>;

    document.getElementById("render_code").value = "";
    ReactDOM.render(element, document.getElementById("render_code"));
}

function selectChanged(e) {
    // Load values and update highlighted code.
    let code = document.getElementById("paste_code");
    const element = <SyntaxHighlighter style={dark} language={e.value}>{code.value}</SyntaxHighlighter>;

    document.getElementById("render_code").value = "";
    ReactDOM.render(element, document.getElementById("render_code"));
}

function myKeyDown(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        let code = document.getElementById("paste_code");
        var start = code.selectionStart;
        var end = code.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        code.value = code.value.substring(0, start) +
            "\t" + code.value.substring(end);

        // put caret at right position again
        code.selectionStart =
            code.selectionEnd = start + 1;
    }
}

const NewPastes = () => {

    // Load values for the select
    let value = "";
    let options_base = SyntaxHighlighter.supportedLanguages;
    let options = [];
    for (let option of options_base) {
        options.push({ value: option, label: option });
    }
    return (
        <div style={{
            width: "100%",
            margin: "0 auto",
            padding: "40px"
        }}>
            <br />
            <h3>New Paste 📓</h3>
            <Divider />
            <br />
            <form>
                <div class="form-outline mb-4" style={{ width: "100%" }}>
                    <label class="form-label" for="form1Example1">Past title  </label>
                    <input id="paste_title" class="form-control" />
                </div>
                <Select id="paste_language" options={options} onChange={selectChanged}></Select>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example2">Content  </label>
                    <textarea id="paste_code" class="form-control" style={{ height: "250px" }} onChange={textChanged} onKeyDown={myKeyDown} />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example2">Syntax Highlighted  </label>
                    <div id="render_code" style={{ height: "100%" }} readOnly={true} />
                </div>
                <Button variant="outlined" style={{
                    width: "100%",
                }}>
                    Upload paste
                </Button>
            </form>
        </div >
    );
};

export default NewPastes;