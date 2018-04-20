import React from 'react';
import PropTypes from 'prop-types';
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
                dispatch(removeExpense( { id : expense.id } ));
                history.push('/');
            }}
        >Remove</button>
    </div>
);

EditExpensePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    expense: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
}

const mapStateToProps = (state, props) =>
    ({
        expense: state.expenses.find( (expense) =>
            expense.id === props.match.params.id),
    });

export default connect(mapStateToProps)(EditExpensePage);