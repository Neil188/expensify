import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render Login page correctly', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLoginProcess={startLogin} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
