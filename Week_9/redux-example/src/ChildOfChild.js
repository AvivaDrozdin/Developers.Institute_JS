import {connect} from 'react-redux'



const ChildOfChild = (props) => {
    return (
        <>
        <h3>I'm a child of child</h3>
        {props.my_a}

        </>
    )
}



const mapStateToProps = (state) => {
    return {
         my_a: state.aaa
    }
}

export default connect(mapStateToProps)(ChildOfChild);
