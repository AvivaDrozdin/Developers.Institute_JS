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

export default Result