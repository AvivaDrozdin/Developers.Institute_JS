import React from 'react'


// ---- Without React - Function component ----

                // props - calls key & value in App.js
// const Hello = (props) => {
//     console.log(props);
//     return(
//         <div>
//             <h1>Hello from Hello.js Function component, {props.user}</h1>
//         </div>
//     )
// }

// export default Hello;





// ----- With React import  - Class component ----

            //extends = access to all child and parent components
class Hello extends React.Component {
    render(){
        console.log(this.props);
        const {user, email} = this.props
        return(
            <div>
               <h1>Hello from Hello.js Class component, {user} </h1>
            </div>
        )
    }
}

export default Hello