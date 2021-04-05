import React, { Component } from 'react';
import {
    Logout
} from 'react-cognito';
import LogoutButton from "./logout_button"

class ProfilePage extends Component {
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
    render() {
        return (
            <Logout>
                <LogoutButton />
            </Logout>
        )
    }
}

export default ProfilePage;