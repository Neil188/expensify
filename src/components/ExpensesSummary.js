import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

numeral.locale('en-gb');

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const total = numeral(expensesTotal / 100).format('$0,0.00');
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>
                    Viewing{' '}
                    <span>{ expensesCount }</span>
                    {' '}{ expenseWord } totalling{' '}
                    <span>{ total }</span>
                </h1>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

ExpensesSummary.propTypes = {
    expensesCount: PropTypes.number.isRequired,
    expensesTotal: PropTypes.number.isRequired,
}

const mapStateToProps = ({ expenses, filters }) => {
    const visibleExpenses = selectExpenses( expenses, filters )

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
