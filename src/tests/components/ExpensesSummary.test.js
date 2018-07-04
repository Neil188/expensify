import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 0 expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary expensesCount={0} expensesTotal={0} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary expensesCount={1} expensesTotal={1234} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary expensesCount={2} expensesTotal={345678} />
    );
    expect(wrapper).toMatchSnapshot();
});