import React from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import SyntaxHighlight from "./components/syntax_highlight";
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
import ReactDOM from 'react-dom';

export default class GetSpecific extends React.Component {
    constructor(props, user) {
        super(props, user);
        this.props = props;
        this.state = {
            pwd_needed: false,
            pwd: "",
            owned: false,
            user: ""
        }
    }
    getToken = () => {
        //(this?.props?.user?.storage[Object.keys(this?.props?.user?.storage)[0]] ?? "pas de token")
        return (this?.props?.user?.storage[Object.keys(this?.props?.user?.storage)[0]] ?? "Anonymous")
    }
    getUsername = () => {
        //console.log(this.props)
        return (this.props?.user?.username);
    }
    onChange = (e) => {
        this.setState({ pwd: e.target.value });
    }
    async pasteLoaded(response) {
        let user = this.getUsername();
        if (user && user === response?.paste?.username) {
            this.setState({ owned: true });
        }
        let element_synt = <SyntaxHighlighter style={dark} language={response?.paste?.lang ?? "javascript"}>{response?.paste?.content ?? "undefined"}</SyntaxHighlighter>;
        ReactDOM.render(element_synt, document.getElementById("render_code"));
        this.setState({ pwd_needed: false });
    }
    onSubmit = async () => {
        let url = "https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/paste/get";
        url += "?hash=" + this.props.match.params.id;
        url += "&pass=" + this.state.pwd
        let result = await fetch(url, { method: "POST", headers: { accesstoken: this.getToken() } });
        let response = await result.json();
        //console.log(response);
        if (response["message"] === "Invalid password.") {
            //console.log("invalid pwd")
            this.setState({ pwd_needed: true });
        } else {
            await this.pasteLoaded(response);
        }
    }

    async componentDidMount() {
        let url = "https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/paste/get";
        url += "?hash=" + this.props.match.params.id;
        let result = await fetch(url, { method: "POST", headers: { accesstoken: this.getToken() } });
        let response = await result.json();
        //console.log(response);
        if (response["message"] === "Invalid password.") {
            //console.log("invalid pwd")
            this.setState({ pwd_needed: true });
        } else {
            await this.pasteLoaded(response);
        }
    }

    render() {
        /*
            TODO : Make syntax highlight with get paste and passwod.
        */
        return (
            <div style={{
                width: "100%",
                margin: "0 auto",
                padding: "40px"
            }}>
                <div hidden={!this.state.owned}>
                    <Button>Edit paste</Button>
                    <Button>Delete paste</Button>
                </div>
                <div hidden={!this.state.pwd_needed}>
                    <TextField type="password"
                        onChange={this.onChange}
                        style={{ width: '30%' }} />
                    <Button variant="outlined"
                        style={{
                            width: "30%",
                            float: "right"
                        }}
                        onClick={this.onSubmit}
                    >
                        Upload paste
                    </Button>
                </div>
                <div hidden={this.state.pwd_needed}>
                    <SyntaxHighlight />
                </div>
            </div>
        );
    }
}