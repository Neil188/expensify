import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'XXX123',
    };
    const state = authReducer( undefined, action );
    expect(state.uid).toBe(action.uid);
});

test('should remove uid on logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer( { uid: 'anything' }, action);
    expect(state.uid).toBe(undefined);
});
