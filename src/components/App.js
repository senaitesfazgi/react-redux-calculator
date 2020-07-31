import React from 'react';
import {newCalculation, removeCalculation} from '../actions/calculations';
import {connect} from 'react-redux';
import './App.css';
import Calculation from './Calculation';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        num1:"",
        num2:"",
        result:"",
        operation: "+"
      };
    }
    calculate=(event) => {

      if (this.state.operation == "+")
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
      }
      else if(this.state.operation == "-")
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })

      }
      else if(this.state.operation == "*")
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
        
      }
      else
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })

      }
      this.props.dispatch(newCalculation(`${this.state.num1} ${this.state.operation} ${this.state.num2} = ${this.state.result.toString()}`));
    }
    
  render()
  {
    return(
      <>
      <form onSubmit = {this.calculate}>
        <h1> Calculator App!</h1>
        Input first number:
        <br/>
        <input type="text" 
                name = "num1"
                id="num1"
                required 
                value={this.state.num1}
                onChange={ (eve) => { this.setState({ num1: eve.target.value }) } } 
        />
        <br/>
        <br/>
        Choose Operation:
        <br/>
        <select value = {this.state.operation} onChange={ (eve) => { this.setState({ operation: eve.target.value }) } }>
          <option value = "+"> + </option>
          <option value = "-"> - </option>
          <option value = "*"> X </option>
          <option value ="-"> / </option>
        </select>
        <br/>
        <br/>
        Input second number:
        <br/>
        <input type="text" 
                name = "num2"
                id="num2"
                required 
                value={this.state.num2}
                onChange={ (eve) => { this.setState({ num2: eve.target.value }) } }/>
        <br/>
        <br/>
        <input type="submit"  value="Calculate" onClick = {() => this.calculate}/>
        <h1>Result:{this.state.result}</h1>
      </form>
      <ul>
          {this.props.calculations.map(calculation =>(
            <Calculation
             key ={calculation.uniqueId}
             uniqueId = {calculation.uniqueId}
             text = {calculation.value}/>
          ))}
        </ul>
      </>
    );
  }
}
export default connect(
  state=> {return{calculations:state}},
)(App);