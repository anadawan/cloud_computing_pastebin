/*index.jsx*/
import React from "react";
import { FormLabel } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"
const PageNotFound = () => {
    return (
        <div style={{
            width: "40%",
            margin: "0 auto",
            padding: "40px"
        }}>
            <FormLabel>404 not found sir.</FormLabel>
            <Button component={Link} to="/" variant="outlined" style={{
                width: "100%"
            }}>Back to home page</Button>
        </div >
    );
};

export default PageNotFound;