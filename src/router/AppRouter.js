import React from 'react'
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import Header from '../component/Header'
import ExpenseDashboardPage from '../component/ExpenseDashboardPage'
import AddExpensePage from '../component/AddExpensePage'
import EditExpensePage from '../component/EditExpensePage'
import HelpPage from '../component/HelpPage'
import NotFoundPage from '../component/NotFoundPage'
const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true } />
      <Route path="/edit/:id" component={EditExpensePage} exact={true } />
      <Route path="/help" component={HelpPage} exact={true } />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
)
export default AppRouter;