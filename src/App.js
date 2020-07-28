import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        num1:"",
        num2:"",
        result:"",
        operation: "Addition"
      };
    }
    calculate=(event) => {
      if (this.state.operation == "Addition")
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
      }
      else if(this.state.operation == "Subtraction")
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
      }
      else if(this.state.operation == "Multiplication")
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
      }
      else
      {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
      }
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
          <option value = "Addition"> + </option>
          <option value = "Subtraction"> - </option>
          <option value = "Multiplication"> X </option>
          <option value ="Division"> / </option>
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
      </>
    )
  }
}
export default App;