// Every component we want to connect to store - requires:
import {connect} from 'react-redux'
import ChildOfChild from './ChildOfChild'


const Child = (props) => {
    return(
        <>
            <h2>Child Component</h2>
            {props.keyname}

            <ChildOfChild a={props.keyname} b={props.bbb}/>
        </>
    )
}
                        // state from store in reducer
const mapStateToProps = (state) => {
    return {
         keyname: state.aaa,
    }
}

export default connect(mapStateToProps)(Child);