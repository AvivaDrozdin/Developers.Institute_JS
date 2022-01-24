const Card = (props) => {
    return(
        <>
            <h1>Card Component for {props.name}</h1>
        </>
    )
}

export default Card


// Alternative way of destruction
// const Card = ({name, email}) => {
//     return(
//         <>
//             <h1>Card Component for {name}</h1>
//         </>
//     )
// }