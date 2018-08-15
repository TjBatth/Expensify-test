import React,{Component} from 'react'
import { connect } from 'react-redux'
import {setTextFilter,sortByDate,sortByAmount} from '../actions/filters'



class ExpenseListFilters extends Component {
    onChangeText(e){
       // console.log(e.target.value); 
        const value=e.target.value;
        this.props.dispatch(setTextFilter(value));   
    }
    selectSortBy=(e)=>{
        const value=e.target.value;
        if(value==='date'){
              this.props.dispatch(sortByDate());
        }else if(value === 'amount'){
            this.props.dispatch(sortByAmount());
        }
    }
    render(){
     return(
        <div>
         <input type='text'
          value={this.props.filter.text}
          onChange={this.onChangeText.bind(this)}
         />
         <select 
            value={this.props.filter.sortBy}
            onChange={this.selectSortBy.bind(this)}
        >
         <option value='date'>date</option>
         <option value='amount'>amount</option>
         </select>
        </div>
        
     );
    }
}
const stateMapToProps = (state) => ({
   filter:state.filter
})

export default connect(stateMapToProps)(ExpenseListFilters);