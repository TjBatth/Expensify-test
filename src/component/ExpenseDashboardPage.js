import React from 'react'
import ExpesneList from './ExpenseList'
import EXpenseListFilters from './ExpenseListFilters'


const ExpenseDashboardPage=(props)=>(
    <div>
      <EXpenseListFilters />
      <ExpesneList />
      
    </div>
)




export default ExpenseDashboardPage;