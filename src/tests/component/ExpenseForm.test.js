import React from 'react'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../component/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should ExpenseForm renderer successfully',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should ExpenseForm Default value renderer successfully',()=>{
    const wrapper=shallow(<ExpenseForm expenses={expenses[1]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(String(wrapper.state('error'))).toBe("you should provide Description and Amount");
})

test('should render success on change note in Expense Form',()=>{
    const value='new note';
    const wrapper =new shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
})


test('should render success on change description in Expense Form',()=>{
    const value='new Description';
    const wrapper =new shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should render success on Valid Amount',()=>{
    const value='12.12';
    const wrapper =new shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should render success on Invalid Expense Form',()=>{
    const value='12.122';
    const wrapper =new shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');
})
