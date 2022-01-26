import React from "react";

class ErrorBoundries extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo){
        // write to log file -> what error & where
        this.setState({error:error, errorInfo:errorInfo})
    }

    render(){
        if(this.state.errorInfo){
            console.log('error:', this.state.error);
            console.log('errorInfo:', this.state.errorInfo)
            return <> An error has occured. Please contact us </>
        }
        // Whatever I wrap in a component includes the children of the component!!! 
        return this.props.children

        
    }

}

export default ErrorBoundries