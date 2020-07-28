import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        num1:"",
        num2:"",
        result:"",
      };
    }
    add(){
      console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
      this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
      console.log(this.state)

    }
    
  render()
  {
    return(
      <>
      <form>
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
        <select value = {this.state.operation}>
          <option value = {this.state.operation}> + </option>
          <option value = {this.state.operation}> - </option>
          <option value = {this.state.operation}> X </option>
          <option value ={this.state.operation}> / </option>
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
        <input type="submit"  value="Calculate" onClick = {() => this.add()}/>
        <h1>Result:{this.state.result}</h1>

      </form>
      </>
    )
  }
}
export default App;