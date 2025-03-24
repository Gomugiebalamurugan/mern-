import React, { Component } from 'react'
class App extends Component {
  state={
   c:0
  }
  changeValue=() =>{
   this.setState({fname:"bala"})
   }
   ins=()=>{ 
      this.setState({c:this.state.c+1})
   }
   des=()=>{
    this.setState({c:this.state.c-1})
 }

  render() {
    
    return (
      <div>
      <center>
      <h1 >products</h1>
      <button onClick={this.ins}>+</button> 
       {this.state.c}
       <button onClick={this.des}>-</button>
      </center>
      </div> 

    )
  }
}

export default App
