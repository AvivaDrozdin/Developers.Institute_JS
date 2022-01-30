import logo from './logo.svg';
import './App.css';
import React from 'react'

// import child component
import Child from './Child';


// import actions
import { handleChangeOne, handleClick } from './actions';


// import method to connect component
import {connect} from 'react-redux'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      one: 'Property One',
      two: 'Property Two'
    }
  }

  
  changeOne = (event) => {
    this.setState({one: event.target.value})
  }

  changeTwo = (event) => {
    this.setState({two: this.state.one})
  }
  render(){
    console.log(this.props.prop_one);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Redux Example</h2>
           Property One = {this.state.one} <br/>

           Property One from Store = {this.props.prop_one} <br/>

           Property Two = {this.state.two} <br/>

           Property Two from Store = {this.props.prop_two} <br/> 

           Property AAA from Store = {this.props.prop_aaa} <br/> 

           <br/>
           {/*  Chaniging state - internal */}
           <input type='text' onChange={this.changeOne}></input>

           <button onClick={this.changeTwo}> Change Two </button> <br/>


          {/* Changing State redux */}
          <input type='text' onChange={this.props.myHandleChange}></input>
          
          <button onClick={this.props.myHandleClick(this.prop_one)}> Change Two Redux</button> <br/> <br/>


           
        <Child />
        </header>
      </div>
    );
  }
}
                      // Store state -> in reducer.js
const mapStateToProps = (state) => {
  return {
    //any name for key  :  name of key in reducer
    prop_one: state.one,
    prop_two: state.two,
    prop_aaa: state.aaa
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    myHandleChange: (e) => dispatch(handleChangeOne(e.target.value)),


    myHandleClick: (value) => dispatch(handleClick(value))


  }
}

// mapStateToProps = give us access to state in store
// mapDispatchToProps =  dispatch / call an action
export default connect(mapStateToProps, mapDispatchToProps)(App);
