import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
    <div>
        <h1>Expense List</h1>
        {
            expenses.map( expense => (
                <ExpenseListItem
                    key={expense.id}
                    {...expense}
                />
            ))
        }
    </div>
);

ExpenseList.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: selectExpenses( expenses, filters ),
});

export default connect(mapStateToProps)(ExpenseList);
