const Card = (props) => {
    const {user} = props;
    const {id,name,email,username} = user;
    return(
      <>
        <div style={{display:'inline-block'}}>
          <img src={`https://robohash.org/${id}?size=150x150`} />
          <div>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>{username}</p>
          </div>
        </div>
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