import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Counter from './components/Counter';
import ErrorBoundries from './components/ErrorBoundries';
import React from 'react';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import {Routes, Route} from 'react-router-dom' 
import Nav from './components/Nav';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
    };
  }

  render(){
    return(
      <>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />}/>

          <Route path='/about' element={<About />}/>

          <Route path='/contact' element={<Contact />}/>

          <Route path='/parent' element={<Parent />}/>
        </Routes>
      </>
    )
  }
   

    
}

export default App;


