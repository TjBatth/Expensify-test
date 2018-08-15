import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

//ADDEXPENSES
const addExpense=({
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
const removeExpense=({id})=>({
    type:'EXPENSE_REMOVE',
    id
})

//EditExpense
const editExpense=({id},updater)=>({
    type:'EXPENSE_EDIT',
    id,
    updater
})

const expensesReducersDefaultState=[];
const filterReducerDefaultSate={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const setTextFilter=(text)=>({
    type:'EXPENSE_TEXT_FILTER',
    text
})

const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
})
const sortByDate=()=>({
   type:'SORT_BY_DATE'
})

const setStartDate=(date)=>({
    type: 'FILTER_START_DATE',
    date
})
const setEndDate=(date)=>({
    type: 'FILTER_END_DATE',
    date
})


const expensesReducer=(state=expensesReducersDefaultSate,action)=>{ 
    switch(action.type){
        case 'EXPENSE_ADD':
        return [...state,action.expense];
        case 'EXPENSE_REMOVE':
        return state.filter((expense)=>expense.id!=action.id);
        case 'EXPENSE_EDIT':
        return state.map((expense)=>{
          if(expense.id==action.id){
            return { 
                ...expense,
                ...action.updater
            }
          }else{
             return expense
           }})
        default:
        return state;
    }
}
 
const filterReducer=(state=filterReducerDefaultSate,action)=>{ 
    switch(action.type){
        case 'EXPENSE_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'amount'
        }
        break;
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:'date'
        }
        case 'FILTER_START_DATE':
        return {
            ...state,
            startDate:action.date
        }
        case 'FILTER_END_DATE':
        return {
            ...state,
            endDate:action.date
        }
        default:
        return state;
    }
}

const expensesReducersDefaultSate=[];



const store=createStore(
    combineReducers({
      expenses:expensesReducer,
      filter : filterReducer
    }));

    const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
        return expenses.filter((expense)=>{   
            const startDateMatch = typeof startDate != 'number' || expense.createedAt >= startDate;
            const endDateMatch = typeof endDate != 'number' ||expense.createedAt <= endDate;
            const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch &&endDateMatch && textMatch; 
    }).sort((a,b)=>{
        if(sortBy==='date'){
             return a.createedAt<b.createedAt ? 1 : -1;
        }else if(sortBy == 'amount'){
            console.log("in amount")
            return a.amount>b.amount?1:-1;
        }
    });
    };
    
    store.subscribe(()=>{
        const state=store.getState();
        const visibleExpenses=getVisibleExpenses(state.expenses,state.filter);
        console.log(visibleExpenses)
    })
    store.dispatch(addExpense({description:"rent is here",amount:1000,createedAt:-10000}))
   const expenseOne= store.dispatch(addExpense({description:"rent is here",amount:1000,createedAt:-1000}))
   const expenseTwo= store.dispatch(addExpense({description:"water rent is here ",amount:100,createedAt:-100}))
//                      store.dispatch(removeExpense({id:expenseOne.expense.id}))
//                      store.dispatch(editExpense({id:expenseTwo.expense.id},{description:'securityCharge',note:'notes are here'}));
   
                    //   store.dispatch(setTextFilter("rent"));

                    store.dispatch(sortByAmount());
//                      store.dispatch(sortByDate());

                    //    store.dispatch(setStartDate(1250));
                    //    store.dispatch(setStartDate());
                    //    store.dispatch(setEndDate(-1250));




