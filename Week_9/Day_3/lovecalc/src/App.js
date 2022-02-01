import logo from './logo.svg';
import './App.css';
import React from 'react';
import Fname from './components/Fname';
import Sname from './components/Sname';
import Button from './components/Button';
import Result from './components/Result'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //fname = name in fname.js
      fname: '',
      sname: '',
      // result = obj because we get response from API
      results: {}
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    const {fname, sname} = this.state;
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "72338c6d33mshb21c37691abfee0p19467ajsne0fc5558cbcc"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({results: data})
      })
      .catch(err => {
        console.error(err);
      });
  }


  render() {
    const { fname, sname, results } = this.state;
    console.log(fname, sname);
    return (
      <div className="App">
        <header className="App-header">
          <Fname handleChange={this.handleChange} />
          <Sname handleChange={this.handleChange} />
          <Button handleClick={this.handleClick}/>

          <Result results={results}/>
        </header>
      </div>

    )
  }
}

export default App;
