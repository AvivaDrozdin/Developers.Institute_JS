import {connect} from 'react-redux';
import { setNames } from '../redux/actions';

const Fname = (props) => {
    return(
        <>
            First Name: 
            <input type='text' name='fname' onChange={props.handleChange}/>
        </>
    )
}

const mapDisatchToProps = dispatch => {
    return {
        handleChange:(e) => dispatch(setNames(e.target.name, e.target.value))
    }
}

export default connect(null, mapDisatchToProps)(Fname)



