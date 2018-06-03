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

test('should render error for invalid form submission', () => {
    const wrapper = shallow(
        <ExpenseForm
            onSubmit={() => {}}
        />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(
        <ExpenseForm
            onSubmit={() => {}}
        />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value },
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
    const value = 'new note';
    const wrapper = shallow(
        <ExpenseForm
            onSubmit={() => {}}
        />);
    wrapper.find('textarea').simulate('change', {
        target: { value },
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(
        <ExpenseForm
            onSubmit={() => {}}
        />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value },
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(
        <ExpenseForm
            onSubmit={() => {}}
        />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value },
    });
    expect(wrapper.state('amount')).toBe('');
});
