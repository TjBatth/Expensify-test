import React from 'react'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../component/ExpenseDashboardPage'

test('should NotFoundPage renderer successfully',()=>{
    const wrapper=shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
