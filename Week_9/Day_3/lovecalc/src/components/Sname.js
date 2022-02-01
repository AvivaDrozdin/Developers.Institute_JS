import {connect} from 'react-redux';
import { setNames } from '../redux/actions';

const Sname = (props) => {
    return(
        <>
            Second Name: 
            <input type='text' name='sname' onChange={props.handleChange}/>
        </>
    )
}

const mapDisatchToProps = dispatch => {
    return {
        handleChange:(e) => dispatch(setNames(e.target.name, e.target.value))
    }
}

export default connect(null, mapDisatchToProps)(Sname)