import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate }
    from '../actions/filters';

export class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null,
    };

    handleDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    handleFocusChange = (calendarFocused) => {
        this.setState( () => ({ calendarFocused }))
    };

    handleTextChange = ({ target }) =>
        this.props.setTextFilter(target.value);

    handleSortChange = ({ target }) =>
        target.value === 'amount' ?
            this.props.sortByAmount() :
            this.props.sortByDate();

    render() {
        const { filters } = this.props;

        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input
                            type='text'
                            value={filters.text}
                            onChange={this.handleTextChange}
                        />
                    </div>
                    <div className='input-group__item'>
                        <select
                            value={filters.sortBy}
                            onChange={this.handleSortChange}
                        >
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className='input-group__item'>
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
                </div>
            </div>
        );
    }
};

ExpenseListFilters.propTypes = {
    setTextFilter: PropTypes.func.isRequired,
    sortByAmount: PropTypes.func.isRequired,
    sortByDate: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        startDate: PropTypes.shape(),
        endDate: PropTypes.shape(),
        text: PropTypes.string,
        sortBy: PropTypes.string,
    }).isRequired,
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
