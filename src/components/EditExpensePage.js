import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, dispatch, history }) => (
    <div>
        <ExpenseForm
            expense={expense}
            onSubmit={ (update) => {
                dispatch(editExpense(expense.id, update));
                history.push('/');
            }}
        />
        <button
            onClick={ () => {
                dispatch(removeExpense( {id : expense.id} ));
                history.push('/');
            }}
        >Remove</button>
    </div>
);

const mapStateToProps = (state, props) =>
    ({
        expense: state.expenses.find( (expense) =>
            expense.id === props.match.params.id),
    });

export default connect(mapStateToProps)(EditExpensePage);