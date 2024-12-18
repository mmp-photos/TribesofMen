import React from 'react';
import PropTypes from 'prop-types';

export default function Login({ setToken }) {
    return(
        <h1>Logged In!</h1>
    )
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }