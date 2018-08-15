import React from 'react'
import {Link} from 'react-router-dom'

export const ExpenseListItem = ({dispatch,id,description,amount,createedAt}) =>
 {
    console.log('id',id,'des : ',description);
    return(
       <div>
       <Link to= {`/edit/${id}`}>
       <h3>{description}</h3>
       </Link>
       <p>{amount}  -  {createedAt}</p>
       </div>
    );
}

export default ExpenseListItem;