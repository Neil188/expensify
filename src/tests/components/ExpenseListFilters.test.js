import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
    wrapper;

beforeEach( () => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            filters={filters}
        />
    );
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with Alt data', () => {
    wrapper.setProps({
        filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'new filter';
    wrapper.find('input').simulate('change', {
        target: { value },
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters,
    });
    wrapper.find('select')
        .simulate('change', {
            target: { value },
        });
    expect(sortByDate).toHaveBeenCalled();
});

test('sort by amount', () => {
    const value = 'amount';
    wrapper.find('select')
        .simulate('change', {
            target: { value },
        });
    expect(sortByAmount).toHaveBeenCalled();
});

test('sort handle date changes', () => {
    const startDate = moment(0).add(1, 'months');;
    const endDate = moment(0).add(2, 'years');
    wrapper.find(DateRangePicker)
        .prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('sort handle date focus changes', () => {
    const focused = 'endDate';
    expect(wrapper.state('calendarFocused'))
        .toEqual(null);
    wrapper.find(DateRangePicker)
        .prop('onFocusChange')( focused );
    expect(wrapper.state('calendarFocused'))
        .toBe(focused);
});
