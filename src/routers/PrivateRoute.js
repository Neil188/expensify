import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AppHeader from '../components/Header';

export const PrivateRoute = ( {
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <div>
                <AppHeader />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

PrivateRoute.defaultProps = {
    isAuthenticated: false,
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    component: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.uid,
})

export default connect(mapStateToProps)(PrivateRoute);
