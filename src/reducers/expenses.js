const expensesReducersDefaultSate=[];

const expensesReducer=(state=expensesReducersDefaultSate,action)=>{ 
    switch(action.type){
        case 'EXPENSE_ADD':
        return [...state,action.expense];
        case 'EXPENSE_REMOVE':
        return state.filter((expense)=>expense.id!=action.id);
        case 'EXPENSE_EDIT':
        return state.map((expense)=>{
            console.log('mate',action.id);
          if(expense.id==action.id){ 
            return { 
                ...expense,
                ...action.updater
            }
          }else{
             return expense
           }
        })
        default:
        return state;
    }
}

export default expensesReducer;