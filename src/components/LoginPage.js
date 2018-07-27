import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginProcess }) => (
    <div>
        <button onClick={startLoginProcess} >Login</button>
    </div>
)

LoginPage.propTypes = {
    startLoginProcess: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    startLoginProcess: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
