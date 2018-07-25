import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    startRemoveExpense,
    setExpenses,
    startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach( ({ id, description, note, amount, createdAt }) => {
        expensesData[id]=  { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then( () => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });
});

test('Should remove an expense from Firebase', (done) => {
    const store = createMockStore({});
    const { id } = expenses[0];
    store.dispatch(startRemoveExpense( { id }))
        .then( () => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id,
            });
            // read database to check expense we just deleted
            return database.ref(`expenses/${id}`)
                .once('value');
        })
        // check value returned from database
        .then( snapshot => {
            expect(snapshot.val()).toBeNull();
            done();
        });
});

test('Should setup edit expense action object', () => {
    const action = editExpense( '123abc', { note: 'New note value' } );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New note value' },
    });
});

test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2],
    });

});

test('should add expense to database and store', (done) => {
    // create test store
    const store = createMockStore({});
    const expenseData = {
        amount : 3000,
        createdAt : 1000,
        description : 'A test',
        note : 'Test note',
    }
    // dispatch startAddExpense action
    store.dispatch(startAddExpense(expenseData))
        .then(
            () => {
                // check ADD_EXPENSE action was triggered in the test store
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseData,
                    },
                });

                // read database to get expense we just stored
                return database.ref(`expenses/${actions[0].expense.id}`)
                    .once('value');

            }
        )
        // check database has been updated with correct values
        .then( snapshot => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to database and store', (done) => {
    // create test store
    const store = createMockStore({});
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    }

    // dispatch startAddExpense action
    store.dispatch(startAddExpense({}))
        .then(
            () => {
                // check ADD_EXPENSE action was triggered in the test store
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...defaultData,
                    },
                });

                // read database to get expense we just stored
                return database.ref(`expenses/${actions[0].expense.id}`)
                    .once('value');

            }
        )
        // check database has been updated with correct values
        .then( snapshot => {
            expect(snapshot.val()).toEqual(defaultData);
            done();
        });
});

test('Should setup add expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});

test('Should fetch the expenses from Firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
        .then( () => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses,
            });
            done();
        })

});
