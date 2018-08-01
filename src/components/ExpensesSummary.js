import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

numeral.locale('en-gb');

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const total = numeral(expensesTotal / 100).format('$0,0.00');
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>
                Viewing { expensesCount } { expenseWord } totalling { total }
            </h1>
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
