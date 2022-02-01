const Sname = (props) => {
    return(
        <>
            Second Name: 
            <input type='text' name='sname' onChange={props.handleChange}/>
        </>
    )
}

export default Sname