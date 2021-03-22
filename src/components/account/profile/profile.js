import React, { Component } from 'react';
import {
    Logout
} from 'react-cognito';
import LogoutButton from "./logout_button"

class ProfilePage extends Component {
    render() {
        return (
            <Logout>
                <LogoutButton />
            </Logout>
        )
    }
}

export default ProfilePage;