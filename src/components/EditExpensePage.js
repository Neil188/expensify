import React, { Component, Fragment } from 'react';
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
            <Fragment>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm
                        expense={expense}
                        onSubmit={ this.onSubmit }
                    />
                    <button
                        className='button button--secondary'
                        onClick={ this.onClick }
                    >Remove Expense</button>
                </div>
            </Fragment>
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
