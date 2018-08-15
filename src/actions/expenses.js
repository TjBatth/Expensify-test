
import uuid from 'uuid';
//ADDEXPENSES
export const addExpense=({
    description='',
    note='',
    amount='',
    createedAt=0

})=>({
    type:'EXPENSE_ADD',
    expense:{
    id:uuid(),
    description,
    note,
    amount,
    createedAt
    }
})

//RemoveExpenses
export const removeExpense=({id})=>({
    type:'EXPENSE_REMOVE',
    id
})

//EditExpense
export const editExpense=(id,updater)=>({
    type:'EXPENSE_EDIT',
    id,
    updater
})