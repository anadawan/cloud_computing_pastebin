import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = ({ onClick }) => (
    <Button variant="outlined" onClick={onClick}>Log out</Button>
);
LogoutButton.propTypes = {
    onClick: PropTypes.func,
};

export default LogoutButton;
