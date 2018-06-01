import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with Expense data', () => {
    const wrapper = shallow(
        <ExpenseForm
            onSubmit={() => {}}
            expense={expenses[1]}
        />
    );
    expect(wrapper).toMatchSnapshot();
});