import { connect } from 'react-redux'
import { findMatch } from '../redux/actions'

const Button = (props) => {
    return(
        <>
            <button onClick={()=>props.handleClick(props.fname, props.sname)}>Calculate</button> 
        </>
    )
}

const mapStateToProps = state => {
    return {
        fname: state.fname,
        sname: state.sname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (fname, sname) =>
        dispatch(findMatch(sname,fname))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)



