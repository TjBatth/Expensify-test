import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './components/AddOption'

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleRemoveOption=this.handleRemoveOption.bind(this);
        this.state={
             options:[]
        }
    }
    handleDeleteOptions(){
        this.setState(()=>({
            options:[]
        })
    )
    }
    handleRemoveOption(optionToRemove){
        this.setState((prevState)=>({
        options:prevState.options.filter((option)=>{
            return option !== optionToRemove
        }
        )}
    ))
}
     handleAddOption(option){
         console.log(option);
         if(!option){
             return "please Enter some Valid Value"
         }
         else if(this.state.options.indexOf(option)>-1){
             return "Already value is Exist"
         }
       this.setState((preState)=>({
        options:preState.options.concat(option)
       }) 
    )
}     

    handlePick(){
        const randomNum= Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        alert(option)
        return option;
    }
    
    componentWillMount() {
        
        
    }
    componentDidMount() {
        try{
          const json=localStorage.getItem('options');
          this.setState(()=>({
            options: JSON.parse(json)  
          }))  
        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.options.length!=prevState.options.length){
            const options=JSON.stringify(this.state.options);
            localStorage.setItem('options',options);
        }

    }
    
       render(){
        const title="Add Item";
        const subTitle="put your life in computer handes";
        
         return(
             <div>
              <Header title={title} subTitle={subTitle}/>
              <Action 
              hasOption={this.state.options.length>0}
              handlePick={this.handlePick}
              />
              <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleRemoveOption={this.handleRemoveOption}
              />
              <AddOption
              handleAddOption={this.handleAddOption}
              />
            </div>
         );
    }
}


const Header =(props)=>{
   return(
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subTitle}</h2>
    </div> 
   )
}

const Action =(props) =>{
    return(

        <button 
        disabled={!props.hasOption}
        onClick={props.handlePick}>
        What should I do?
        </button>
    )
}

const Options =(props) =>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((val)=>
            <Option 
            value={val} 
            key={val} 
            handleRemoveOption={props.handleRemoveOption}
            />)}
       </div>
    )
}
const Option =(props) =>{
    return(
        <div>
        <button onClick={(e)=>props.handleRemoveOption(props.value)}>Remove </button>
        <p> {props.value}</p>
        </div>
    )
}




const app=document.getElementById('name');

ReactDOM.render(<IndecisionApp />,app);