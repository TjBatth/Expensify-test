import React from 'react'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../component/NotFoundPage'

test('should NotFoundPage renderer successfully',()=>{
    const wrapper=shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
