import './card.css'

// const Card = (props) => {

//     const styleObj = {
//         color: 'red',
//         fontSize: '30px'
//     }

//     return(
//         <>
//                 {/* // Using Tachyons */}
//             <div className= 'tc grow bg-light-green br3 pa2 ma3 dib shadow-5'>
//                 Card:
              
//                 <img src={`https://robohash.org/${props.id}?size=200x200`}></img>

//                 {/* Inline style */}
//                 <h2 style= {{color:'cyan', fontSize:'50px'}}> {props.name} </h2>

//                 {/* Object based Style */}
//                 <h3 style={styleObj}> {props.email} </h3>

//                 {/* CSS file style */}
//                 <h4 className='header'> {props.username} </h4>
//             </div>
//             <div>
//                 <h1>This is a second Div</h1>
//             </div>
//         </>

//     )
// }

// export default Card


const Card = (props) => {
 const {data} = props;
 const {id, name, email, username} = data;
  return(
   <>
    <div className='tc grow bg-light-green br3 pa3 ma3 dib shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <h4>{email}</h4>
      <p>{username}</p>
    </div>
   </>
  )
}
export default Card
