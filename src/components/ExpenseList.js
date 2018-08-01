import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = ({ expenses }) => (
    <div>
        {
            expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                expenses.map( expense => (
                    <ExpenseListItem
                        key={expense.id}
                        {...expense}
                    />
                ))
            )
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
