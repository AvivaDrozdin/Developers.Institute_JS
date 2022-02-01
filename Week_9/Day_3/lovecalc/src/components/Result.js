import {connect} from 'react-redux'

const Result = (props) => {
    return(
        <>
            Result:
            <p>{props.results.fname} & {props.results.sname} </p>
            <p>Percentage: {props.results.percentage} </p>
            <p>{props.results.result}</p>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}


export default connect(mapStateToProps)(Result)







