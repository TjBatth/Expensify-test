import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import SelectExpense from '../selectors/expenses';

const ExpenseList = (props) => {
  console.log('props.expenses',props.expenses)
    return(
       <div>    
          {props.expenses.map((expense) =>  
            <ExpenseListItem key={expense.id} {...expense} />)}
       </div>

    );

}

const mapStateToProps=(state)=>{
    console.log('state',state.expenses)
    return({
      expenses:SelectExpense(state.expenses,{...state.filter})
     // filter:state.filter
    })
  }

export default connect(mapStateToProps)(ExpenseList) ;