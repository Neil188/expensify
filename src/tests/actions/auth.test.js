import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const DUMMYUID = 'xxx123';
    const action = login(DUMMYUID);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: DUMMYUID,
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});
