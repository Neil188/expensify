import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = () => {
        this.props.removeExpense( { id: this.props.expense.id } );
        this.props.history.push('/');
    }

    render() {
        const { expense } = this.props;
        return (
            <div>
                <ExpenseForm
                    expense={expense}
                    onSubmit={ this.onSubmit }
                />
                <button
                    onClick={ this.onClick }
                >Remove</button>
            </div>
        )}
}

EditExpensePage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    editExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
    expense: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    removeExpense: (data) => dispatch(startRemoveExpense( data )),
});

const mapStateToProps = (state, props) =>
    ({
        expense: state.expenses.find( (expense) =>
            expense.id === props.match.params.id),
    });

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
