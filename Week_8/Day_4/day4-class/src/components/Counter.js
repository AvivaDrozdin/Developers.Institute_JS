import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    render(){
        if(this.state.counter === 5) {
            throw new Error('I reached 5 & crashed')
        }
        return(
            <>
                <button onClick={() => this.setState({counter: this.state.counter+1})}> Click </button>
                {this.state.counter}
            </>
        )
    }
}


export default Counter;