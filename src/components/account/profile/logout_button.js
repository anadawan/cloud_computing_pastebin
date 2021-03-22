import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

const LogoutButton = ({ onClick }) => (
    <div style={{ width: "40%", margin: "0 auto", padding: "40px" }}>
        <Button onClick={onClick} variant="outlined" style={{
            width: "100%"
        }}><b>Log out</b></Button>
    </div>
);
LogoutButton.propTypes = {
    onClick: PropTypes.func,
};

export default LogoutButton;
