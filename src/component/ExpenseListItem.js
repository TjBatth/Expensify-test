import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {removeExpense} from '../actions/expenses'

export const ExpenseListItem = ({dispatch,id,description,amount,createedAt}) =>
 {
    console.log('id',id,'des : ',description);
    return(
       <div>
       <Link to= {`/edit/${id}`}>
       <h3>{description}</h3>
       </Link>
       <p>{amount}  -  {createedAt}</p>

       <button onClick={()=>{dispatch(removeExpense({id}))}}>Remove Item</button>
       </div>
    );
}

export default connect()(ExpenseListItem);