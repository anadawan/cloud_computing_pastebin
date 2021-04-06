import React, { Component } from 'react';
import {
    Logout
} from 'react-cognito';
import LogoutButton from "./logout_button"

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            submitted: false,
            url_file: ""
        }
    }
    async componentDidMount() {
        let key = this.props.user.storage[Object.keys(this.props.user.storage)[0]];
        console.log(key);
        let reqOpt = {
            method: "GET",
            headers: {
                "accesstoken": key
            }
        }
        let res = await fetch("https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/checktoken", reqOpt)
        console.log(await res.json())
    }
    changeHandler = (e) => {
        let filen = e.target.files[0];

        this.setState({ file: filen });
        this.setState({ submitted: true })
        console.log(e.target.files[0])
    }
    handleSubmission = async () => {
        const formData = new FormData();

        formData.append('file', this.state.file);
        let response = await fetch('https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/upload', { method: 'POST', body: formData });
        let response_json = await response.json();
        this.setState({ urlfile: response_json.file.location })
    }
    render() {
        return (
            <div style={{ width: "100%" }}>
                <img src={this.state.urlfile}></img>
                <input type="file" name="file" onChange={this.changeHandler} />
                <button enabled={this.state.submitted} onClick={this.handleSubmission}>Submit</button>
                <Logout>
                    <LogoutButton />
                </Logout>
            </div>
        )
    }
}

export default ProfilePage;