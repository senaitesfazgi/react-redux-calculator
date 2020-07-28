import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        num1:"",
        num2:"",
        result:""
      };
    }

chnageNum = (event) =>
{
  event.preventDefault();
  const num1 = {
    num1:this.state.num1
  };
  const num2 = {
    num2:this.state.num2
  };
  console.log(num1);
  console.log(num2);
}
updateItem(key, value)
{
  this.setState({[key]:value});
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
              onChange={event => this.updateItem('num1', event.target.value)} 
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
              onChange={event => this.updateItem('num2', event.target.value)} />
      <br/>
      <br/>
      <input type="submit" value="Calculate"/>

    </form>
    </>
  )
}
}

export default App;