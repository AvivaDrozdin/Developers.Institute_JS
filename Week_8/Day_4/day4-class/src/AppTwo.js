import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Counter from './components/Counter';
import ErrorBoundries from './components/ErrorBoundries';
import React from 'react';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      page: ''

    };
  }

  changePage = (pageToNavigate) => {
    this.setState({page: pageToNavigate})
  }



  render(){

    // If the state of page is a case of:
    switch(this.state.page){
      // Home -> return home page
      case 'home':
        return(
         <> <Home changePage={this.changePage} /> </>
        )
      //  Contact -> return Contact page
      case 'contact':
        return(
         <> <Contact /> </>
        )
      // About -> return About page
      case 'about':
        return(
          <><About /></>
        )
      // Anything Else -> return Home page by defult
      default:
        return(
          <> <Home changePage={this.changePage}/> </>
        )


    }
   

      // ---- ERROR BOUNDRIES ----
        // <div className="App">
        //   <header className="App-header">
        //     {/* <Parent /> */}
        //     <ErrorBoundries>
        //       <h2>Wrap Counter</h2>
        //       <Counter />
        //     </ErrorBoundries>
        //   </header>
        // </div>
    
  }
}

export default App;


