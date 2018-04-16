import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
    }
    handleAmountChange = ({target}) => {
        const amount = target.value;
        const valid = amount.match(/^\d*(\.\d{0,2})?$/);
        if (valid) {
            this.setState( () => ({ amount }));
        }
    }
    handleDateChange = (createdAt) => {
        this.setState( () => ({ createdAt }));
    }
    handleDateFocusChange = ({ focused }) => {
        this.setState( () => ({ calendarFocused: focused }));
    }
    handleDescriptionChange = ({target}) => {
        const description = target.value;
        this.setState( () => ({description}) );
    }
    handleNoteChange = ({target}) => {
        const note = target.value;
        this.setState( () => ({note}) );
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        onChange={this.handleDescriptionChange}
                        placeholder='Description'
                        type='text'
                        value={this.state.description}
                    />
                    <input
                        onChange={this.handleAmountChange}
                        placeholder='Amount'
                        type='text'
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.handleDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.handleDateFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ () => false}
                    />
                    <textarea
                        onChange={this.handleNoteChange}
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}