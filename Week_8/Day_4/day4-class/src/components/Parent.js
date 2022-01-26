import React from 'react';
import Child from './Child';

// Example for component Unmount
class Parent extends React.Component{
    constructor(){
        super()
        // State describes data in the component
        this.state = {
            show: true,

        }
    }

    toggleChild = () => {
                    // == Change to -> Show : false (!this.state.show == opposite of  this.state.show -> currently true)
        this.setState({show:!this.state.show})
    }


    render(){
        return (
        <>
            {/* Is the show state true? If yes - show child - if no - don't show */}
            {this.state.show?<Child /> : null}
            <button onClick={this.toggleChild}> Chick me to toggle child </button>
        </>
        )
    }
}

export default Parent;