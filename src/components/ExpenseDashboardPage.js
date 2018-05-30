import React from 'react';
import ExpenseListConnect from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseListConnect />
    </div>
)

export default ExpenseDashboardPage;