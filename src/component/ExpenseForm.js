import React,{Component} from 'react'
import { sortByAmount } from '../actions/filters';
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


 

export default class ExpenseForm extends Component{
        constructor(props){
            super(props);
            this.state={
                description:props.expense?props.expense.description:'',
                amount:props.expense?(props.expense.amount/100).toString():'',
                note:props.expense?props.expense.note:'',
                createdAt:props.expense?moment(props.expense.createdAt):moment(),
                focused:false,
                error:''
            }
        }
  
    
    changeDescription=(e)=>{
        const description=e.target.value;
        this.setState(()=>({
            description
        }))
    }
    changeAmount=(e)=>{
        const amount=e.target.value;
    if(!amount || amount.match(/^\d*(\.\d{0,2})?$/))
    {
        this.setState(()=>({
            amount
        }))
    }
    }

    changeNote=(e)=>{
        const note=e.target.value;
        this.setState(()=>({
            note
        }))
    }
    onFocusChanged=({focused})=>{
        this.setState(()=>({focused}));
    }

    createdAt=()=>{


      }

    onDateChange=(createdAt)=>{
        if(createdAt)
         this.setState(()=>({createdAt}))
    }

    addExpesneClick=()=>{
        console.log('clicked to add');
    }
    onSubmit=(e)=>{
        e.preventDefault();
          if(!this.state.description || !this.state.amount){
             this.setState(()=>({
                 error:'you should provide Description and Amount'
             }))
          }else{
            this.setState(()=>({
                error:''
            }))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
          }

        console.log('hello')
    }

    render(){
      return(
           <div>
           {this.state.error && <p>{this.state.error} </p>}
           <form onSubmit={this.onSubmit}>
             <input type='text'
             placeholder='descripton'
             autoFocus
             value={this.state.description}
             onChange={this.changeDescription.bind(this)}
             />
             <input type='number'
             placeholder="Amount"
             value={this.state.amount}
             onChange={this.changeAmount.bind(this)}
             />
             <textarea 
             placeholder="Note"
             value={this.state.note}
             onChange={this.changeNote.bind(this)}
             />
             <SingleDatePicker
             date={this.state.createdAt}
             onDateChange={this.onDateChange}
             focused={this.state.focused}
             onFocusChange={this.onFocusChanged}
             numberOfMonths={1}
             isOutsideRange={()=>false}
             />
             <button
                 onClick={this.addExpesneClick.bind(this)}
             >Add Expense</button> 
             </form>
           </div>
      );
    }
}