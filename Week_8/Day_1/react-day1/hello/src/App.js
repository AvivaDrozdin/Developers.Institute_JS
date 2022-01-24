import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'tachyons'
import Card from './components/Card';

// const robots = [
//   {id:1, name:'Yotam', email:'y@gamil.com', username:'yotam_username'},
//   {id:2, name:'Fima', email:'f@gamil.com', username:'fima_username'},
//   {id:3, name:'Avishai', email:'a@gamil.com', username:'avishai_username'},
//   {id:4, name:'Sam', email:'s@gamil.com', username:'sam_username'},
//   {id:4, name:'Ziv', email:'z@gamil.com', username:'zivuch_username'},
// ]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: []
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({arr:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({arr:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  render(){
    console.log('render');
    return (
      <>
      <div>
        <button onClick={this.handleClick}>Get Robot</button>
      </div>
      <div>
        {
          this.state.arr.map((item,i) => {
            return <Card data={item} key={i}/>
          })
        }
      </div>
      </>
    )
  }
}

// const App = () => {
//   return (
//     <div>
//       {
//         robots.map(item => {
//           return <Card data={item}/>
//         })
//       }
//     </div>
//   );
// }

export default App;
