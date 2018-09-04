import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOutProcess }) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content'>
                <Link
                    className='header__title'
                    to='/dashboard'
                    activeClassName='is-active'
                    exact
                >
                    <h1>Expensify</h1>
                </Link>
                <button
                    onClick={startLogOutProcess}
                >
                    Logout
                </button>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    startLogOutProcess: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    startLogOutProcess: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Header);
