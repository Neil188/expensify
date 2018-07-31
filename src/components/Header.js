import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOutProcess }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink
            to='/dashboard'
            activeClassName='is-active'
            exact
        >
            Dashboard
        </NavLink>
        <NavLink
            to='/create'
            activeClassName='is-active'
        >
            Create Expense
        </NavLink>
        <button
            onClick={startLogOutProcess}
        >
            Logout
        </button>
    </header>
)

Header.propTypes = {
    startLogOutProcess: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    startLogOutProcess: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Header);
