/*index.jsx*/

import React from "react";
import { Divider } from '@material-ui/core';

// Main page 
class MainPage extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div style={{
                width: "100%",
                margin: "0 auto",
                padding: "50px"
            }}>
                <br />
                <h3>Welcome to Pastebean !</h3>
                <Divider />
            </div>
        );
    }
};

export default MainPage;