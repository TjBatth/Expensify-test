import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../component/ExpenseList';
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'

test('should Expense List renderer   successfully here',()=>{
      const wrapper=shallow(<ExpenseList expenses={expenses}/>)
      expect(toJSON(wrapper)).toMatchSnapshot();
})

test("Should renderer with default values : ",()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})