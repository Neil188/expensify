import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// Set to en-gb to get UK formatted dates in SingleDatePicker
moment.locale('en-gb');

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        const { expense } = props;
        this.state = {
            description: expense ? expense.description : '',
            note: expense ? expense.note : '',
            amount: expense ? (expense.amount / 100).toString() :'',
            createdAt: expense ? moment(expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        }
    }

    handleAmountChange = ({ target }) => {
        const amount = target.value;
        const valid = !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/);
        if (valid) {
            this.setState( () => ({ amount }));
        }
    }
    handleDateChange = (createdAt) =>
        !!createdAt && this.setState( () => ({ createdAt }));

    handleDateFocusChange = ({ focused }) =>
        this.setState( () => ({ calendarFocused: focused }));

    handleDescriptionChange = ({ target }) => {
        const description = target.value;
        this.setState( () => ({ description }) );
    }
    handleNoteChange = ({ target }) => {
        const note = target.value;
        this.setState( () => ({ note }) );
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { description, amount, createdAt, note } = this.state;
        const error =
            (!description || !amount) ?
                'Please provide description and amount' :
                '';
        this.setState( () => ({ error }) );

        !error && this.props.onSubmit({
            description,
            amount: parseFloat(amount,10) * 100,
            createdAt: createdAt.valueOf(),
            note,
        });
    }
    render() {
        const {
            description,
            amount,
            createdAt,
            note,
            error,
            calendarFocused,
        } = this.state;
        const { expense } = this.props;
        return (
            <div>
                {error && <p>{error}</p>}
                <form onSubmit={this.handleSubmit} >
                    <input
                        onChange={this.handleDescriptionChange}
                        placeholder='Description'
                        type='text'
                        value={description}
                    />
                    <input
                        onChange={this.handleAmountChange}
                        placeholder='Amount'
                        type='text'
                        value={amount}
                    />
                    <SingleDatePicker
                        date={createdAt}
                        onDateChange={this.handleDateChange}
                        focused={calendarFocused}
                        onFocusChange={this.handleDateFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ () => false}
                    />
                    <textarea
                        onChange={this.handleNoteChange}
                        placeholder='Add a note for your expense (optional)'
                        value={note}
                    />
                    <button>{`${expense ? 'Edit' : 'Add'} Expense`}</button>
                </form>
            </div>
        )
    }
};
ExpenseForm.defaultProps = {
    expense: null,
}

ExpenseForm.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        note: PropTypes.string,
        amount: PropTypes.number,
        createdAt: PropTypes.number,
    }),
    onSubmit: PropTypes.func.isRequired,
};
