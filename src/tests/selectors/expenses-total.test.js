import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses', () => {
    const data = [];
    const result = selectExpensesTotal(data);

    expect(result).toEqual( 0 )
});

test('should correctly add up a single expense', () => {
    const data = [expenses[0]];
    const result = selectExpensesTotal(data);

    expect(result).toEqual( 195 );
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);

    expect(result).toEqual( 114195 );
});

