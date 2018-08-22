import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginProcess }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>It&apos;s time to get your expenses under control.</p>
            <button onClick={startLoginProcess} >Login</button>
        </div>
    </div>
)

LoginPage.propTypes = {
    startLoginProcess: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    startLoginProcess: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
