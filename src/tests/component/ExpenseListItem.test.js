import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListItem} from '../../component/ExpenseListItem';
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'

test("should render ExpenseListItem successfully",()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test("should render ExpenseListItem with no props successfully",()=>{
    const wrapper=shallow(<ExpenseListItem />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})