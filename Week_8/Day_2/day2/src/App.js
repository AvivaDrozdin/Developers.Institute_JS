import React from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'


// --- Class Component: When we need to use Functions & Use Render  ---- Function Component: When no functions needed ///

class App extends React.Component{
  constructor(){
    super();
    // The only way to call render - use state!
    // Inside the object add all variables we want to render - that can be reused and/or changed during use
    this.state = {
      test: '',
      arr: [],
      counter:0,

      number1: 0,
      number2: 10
    }
    // console.log('1', 'constructor')
  }


  componentDidMount(){
  //   console.log('2', 'componentDidMount')
  }



  handlePlus = () => {
    this.setState({counter:this.state.counter+1})
    console.log(this.state)

    // alternative
    // const {counter} = this.state;
    // this.setState({counter:counter+1})
  }


  handleMinus = () => {
    if(this.state.counter <= 0){
      this.setState({
        counter:0
      });
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }



  handleBoth = () => {
    const {number} = this.state;
    this.setState({number:number1+1, number:number1-1})
  }

  render(){
    // console.log('3', 'render')
    return (
      <div className="App">
        <header className="App-header">
                            {/* On click - execute handleClick */}
          <button onClick={this.handlePlus}> Click me  - Add one </button>

          <button onClick={this.handleMinus}> Click me  - Subtract one </button>
          {/* On click - add  or subtract 1 to counter */}
            {this.state.counter}



          <button onClick={this.handleBoth}> Click me  - Subtract one </button>
          {this.state.number1} ##### {this.state.number2}


          <Card name={'Adam'} email={'adam@adamson.com'}/>
        </header>
      </div>
    );
  }
}

export default App;





//---- Function Component - Doesn't require 'import React' 

// function App(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }