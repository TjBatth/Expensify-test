import React from 'react'
import  ReactDOM  from 'react-dom'
import AppRouter from './router/AppRouter'
import configurationStore from './store/store'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import {Provider } from 'react-redux';
import showFilterResult from './selectors/expenses'


import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'

 const store=configurationStore();
// store.subscribe(()=>{
//   //  console.log(store.getState());
// })
 store.dispatch(addExpense({description:'water Bill',amount:50}));
  store.dispatch(addExpense({description:'Gas Bill',amount:500}));
// store.dispatch(setTextFilter({text:'Bill'}));
// //console.log("store.getState().expenses",store.getState().filter);
// //console.log(showFilterResult(store.getState().expenses,store.getState().filter));
  // store.dispatch(setTextFilter('Bill'));

  // setTimeout(()=>store.dispatch(setTextFilter('Water')),3000);
// const getVisibleHint=showFilterResult(store.getState().expenses,store.getState().filter.text);
// console.log(getVisibleHint)

const jxs=(
<Provider store={store}>
  <AppRouter />
</Provider>

);




ReactDOM.render(jxs,document.getElementById('name'));