import React, { Component } from 'react';

// SEPERATE COMPONENT TO HAVE A CLEAN APP.js

class CardList extends Component {
    constructor(){
        super();
        this.state = {
            arr:[]
        };
    }
    render (){
        const {arr} = this.state;
        return (
            {
                arr.map((item, i) => {
                    return <Card user={item} />
                })
            }
        )
           
}