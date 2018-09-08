import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Add Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
};

AddExpensePage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    startAddExpense: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});


export default connect(undefined, mapDispatchToProps)(AddExpensePage);

