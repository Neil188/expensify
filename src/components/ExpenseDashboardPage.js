import React from 'react';
import ExpenseListConnect from './ExpenseList';
import ExpenseListFiltersConnect from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFiltersConnect />
        <ExpenseListConnect />
    </div>
)

export default ExpenseDashboardPage;