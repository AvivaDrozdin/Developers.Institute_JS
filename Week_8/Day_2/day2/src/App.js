import React from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'


// // --- Class Component: When we need to use Functions & Use Render  ---- Function Component: When no functions needed ///

// class App extends React.Component {
//   constructor() {
//     super();
//     // The only way to call render - use state!
//     // Inside the object add all variables we want to render - that can be reused and/or changed during use
//     this.state = {
//       test: '',
//       arr: [],
//       counter: 0,

//       number1: 0,
//       number2: 10
//     }
//     // console.log('1', 'constructor')
//   }


//   componentDidMount() {
//     //   console.log('2', 'componentDidMount')
//   }



//   handlePlus = () => {
//     this.setState({ counter: this.state.counter + 1 })
//     console.log(this.state)

//     // alternative
//     // const {counter} = this.state;
//     // this.setState({counter:counter+1})
//   }


//   handleMinus = () => {
//     if (this.state.counter <= 0) {
//       this.setState({
//         counter: 0
//       });
//     } else {
//       this.setState({
//         counter: this.state.counter - 1
//       });
//     }
//   }

// // componentDidMount - NOT ONLY FOR FETCHING!!!!
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ arr: data })
//       })
//   }


//   render() {
//     const { arr } = this.state
//     // console.log('3', 'render')
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Card name={'Adam'} email={'adam@adamson.com'} />

//           {/* On click - execute handleClick */}
//           <button onClick={this.handlePlus}> Click me  - Add one </button>

//           <button onClick={this.handleMinus}> Click me  - Subtract one </button>
//           {/* On click - add  or subtract 1 to counter */}
//           {this.state.counter}





//           {/* Loop through users and e.g. add images -- user = in Card.js */}
//           {
//             // if no const {arr} = this.state --> use: this.state.arr.map
//             arr.map((item, i) => {
//               return <Card user={item} />
//             })
//           }



//         </header>
//       </div>
//     );
//   }
// }

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