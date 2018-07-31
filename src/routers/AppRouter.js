import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ConAddExpensePage from '../components/AddExpensePage';
import ConEditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import ConLoginPage from '../components/LoginPage';
import ConPrivateRoute from './PrivateRoute';
import ConPublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
                <ConPublicRoute exact path='/' component={ConLoginPage} />
                <ConPrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <ConPrivateRoute path='/create' component={ConAddExpensePage} />
                <ConPrivateRoute path='/edit/:id' component={ConEditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;
