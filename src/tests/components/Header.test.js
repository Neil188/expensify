import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header  startLogOutProcess={ () => {} } />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header  startLogOutProcess={startLogOut} />);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});
