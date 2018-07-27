import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header  startLogOutProcess={startLogOut} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});
