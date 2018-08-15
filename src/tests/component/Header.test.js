import React from 'react'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json';
import Header from '../../component/Header'

test('should header renderer successfully',()=>{
    const wrapper=shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    // const renderer=  new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})