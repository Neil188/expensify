import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate }
    from '../actions/filters';

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null,
    };

    handleDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    handleFocusChange = (calendarFocused) => {
        this.setState( () => ({ calendarFocused }))
    };

    render() {
        const {
            filters,
            dispatch,
        } = this.props;

        return (
            <div>
                <input
                    type="text"
                    value={filters.text}
                    onChange={({target}) =>
                        dispatch(setTextFilter(target.value))}
                />
                <select
                    value={filters.sortBy}
                    onChange={({target}) => target.value === 'amount' ?
                        dispatch(sortByAmount()) :
                        dispatch(sortByDate())
                    }
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={ filters.startDate }
                    startDateId='filterStartDate'
                    endDate={ filters.endDate }
                    endDateId='filterEndDate'
                    onDatesChange={ this.handleDatesChange }
                    focusedInput={ this.state.calendarFocused }
                    onFocusChange={ this.handleFocusChange }
                    numberOfMonths={ 1 }
                    isOutsideRange={ () => false }
                    showClearDates
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
