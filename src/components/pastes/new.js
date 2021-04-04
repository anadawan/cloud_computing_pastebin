/*new.js*/

import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
import React from "react";
import Button from "@material-ui/core/Button"
import { Divider } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactDOM from 'react-dom';
import SyntaxHighlight from "./components/syntax_highlight";
import PasteContent from "./components/paste_content";
import PasteTitle from "./components/paste_title";
import PasteExpiration from "./components/paste_expiration";
import PastePassword from "./components/paste_password";
import PasteTags from "./components/paste_tags";
import PastePublic from "./components/paste_public";
class NewPastes extends React.Component {
    getToken = () => {
        console.log(this?.props?.user?.storage[Object.keys(this?.props?.user?.storage)[0]] ?? "pas de token")
        return (this?.props?.user?.storage[Object.keys(this?.props?.user?.storage)[0]] ?? "Anonymous")
    }
    constructor(props) {
        super(props);
        this.state = {
            expiration: false,
            password: false,
            public: false,
            language: "",
            expiration_date: "",
            expiration_time: "",
            password_text: "",
            content: "",
            title: "",
            tags: ""
        }
    }
    // #region ButtonSubmit
    onButtonClick = (e) => {
        /*
            https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/paste/create
            ?title=t&content=t&expiration=2021-04-15 23:32:28&pass=pass&tags=abc,abc&acl=public 
        */
        console.log(this.state);
        let requestType = "POST";
        let requestUrl = "https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/paste/create";
        let requestOptions = {
            method: 'POST',
            headers: { accesstoken: this.getToken() }
        };

        requestUrl += "?";
        requestUrl += "title=" + this.state.title + "&";
        if (this.state.password)
            requestUrl += "pass=" + this.state.password_text + "&";
        else
            requestUrl += "pass=&";

        requestUrl += "content=" + encodeURI(this.state.content) + "&";
        if (this.state.expiration)
            requestUrl += "expiration=" + this.state.expiration_date + " " + this.state.expiration_time + ":00" + "&";
        if (this.state.public)
            requestUrl += "acl=public&"
        else
            requestUrl += "acl=private&"
        requestUrl += "tags=" + this.state.tags + "&";
        requestUrl += "lang=" + this.state.language;
        fetch(requestUrl, requestOptions).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        // TODO : Maybe redirect to paste after ?
    }
    // #endregion
    // #region Title
    titleChanged = (e) => { this.setState({ title: e.target.value }); }
    // #endregion
    // #region Content
    contentChanged = () => {
        // Load values and update highlighted code.
        let code = document.getElementById("paste_code");
        const element = <SyntaxHighlighter style={dark} language={document.getElementById("paste_language").innerText}>{code.value}</SyntaxHighlighter>;

        document.getElementById("render_code").value = "";
        ReactDOM.render(element, document.getElementById("render_code"));
        this.setState({ content: code.value })
    }
    tabPressed = (e) => {
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
    // #endregion
    // #region Syntax
    languageChanged = (e) => {
        // Load values and update highlighted code.
        let code = document.getElementById("paste_code");
        const element = <SyntaxHighlighter style={dark} language={e.value}>{code.value}</SyntaxHighlighter>;

        document.getElementById("render_code").value = "";
        ReactDOM.render(element, document.getElementById("render_code"));
        this.setState({ language: e.value })
    }
    // #endregion  
    // #region Expiration
    toggleExpiration = (e) => { this.setState({ expiration: !this.state.expiration }); }
    dateChanged = (e) => { this.setState({ expiration_date: e.target.value }); console.log(e.target.value); }
    timeChanged = (e) => { this.setState({ expiration_time: e.target.value }); }
    // #endregion    
    // #region Password
    togglePassword = () => { this.setState({ password: !this.state.password }) };
    passwordChanged = (e) => { this.setState({ password_text: e.target.value }) };
    // #endregion
    // #region Tags
    tagsChanged = (e) => { this.setState({ tags: e.target.value }); }
    // #endregion
    // #region Public
    togglePublic = () => { this.setState({ public: !this.state.public }) }
    // #endregion
    render() {
        // Load values for the select
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
                    {/* TITLE */}
                    <PasteTitle
                        titleChanged={this.titleChanged}
                    />
                    {/* CODE CONTENT */}
                    <PasteContent
                        options={options}
                        languageChanged={this.languageChanged}
                        contentChanged={this.contentChanged}
                        tabPressed={this.tabPressed}
                    />
                    {/* SYNTAX HIGHLIGHT */}
                    <SyntaxHighlight
                        options={this.options}
                    />
                    {/* PASTE EXPIRATION */}
                    <PasteExpiration
                        dateChanged={this.dateChanged}
                        timeChanged={this.timeChanged}
                        toggleExpiration={this.toggleExpiration}
                        expiration={this.state.expiration}
                    />
                    {/* PASTE PASSWORD */}
                    <PastePassword
                        togglePassword={this.togglePassword}
                        passwordChanged={this.passwordChanged}
                        password={this.state.password}
                    />
                    {/* PASTE TAGS */}
                    <PasteTags
                        tagsChanged={this.tagsChanged}
                    />
                    {/* PASTE PUBLIC */}
                    <PastePublic
                        togglePublic={this.togglePublic}
                        public={this.state.public}
                    />
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}
                        onClick={this.onButtonClick}
                    >
                        Upload paste
                    </Button>
                </form>
            </div >
        );
    }
};

export default NewPastes;