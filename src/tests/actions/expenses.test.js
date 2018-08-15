import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

test('should setup remove the expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'EXPENSE_REMOVE',
        id:'123abc'
    });
});

test('should setup EDIT the expense action object',()=>{
const action=editExpense('123abc',{note:'New Note Value'});
    expect(action).toEqual({
        type:'EXPENSE_EDIT',
        id:'123abc',
        updater:{
            note:'New Note Value'
        }
    });
});
test('should setup add expense action object with  provided values',()=>{
    const expenseData={
        description:'Rent',
        amount:109500,
        createedAt:1000,
        note:'This was last Months rent'
    };
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'EXPENSE_ADD',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})