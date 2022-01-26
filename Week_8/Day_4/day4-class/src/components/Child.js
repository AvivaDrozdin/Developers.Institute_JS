import React from "react";

class Child extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    // Last stage / warning before removing component - (click button - alerts- then removed)
    componentWillUnmount(){
        // alert('Please dont throw me away')
    }

    render(){
        return(
            <>
                <h2>I'm a Child Component </h2>
            </>
        )
    }
}

export default Child;

// Alternative how to export: 
// in class name - export default class Child ...