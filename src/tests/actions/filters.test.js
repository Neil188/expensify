import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter }
    from '../../actions/filters';

const DUMMYDATE = moment(0);

test('should generate set start date action object', () => {
    const action = setStartDate(DUMMYDATE);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: DUMMYDATE,
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(DUMMYDATE);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: DUMMYDATE,
    });
})

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('should generate set text filter object', () => {
    const TEXT = 'Test'
    const action = setTextFilter(TEXT);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: TEXT,
    });
});

test('should generate set text filter object with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});
