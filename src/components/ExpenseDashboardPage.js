import React from 'react';
import ExpenseListConnect from './ExpenseList';
import ExpenseListFiltersConnect from './ExpenseListFilters';
import ExpensesSummaryConnect from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummaryConnect />
        <ExpenseListFiltersConnect />
        <ExpenseListConnect />
    </div>
)

export default ExpenseDashboardPage;