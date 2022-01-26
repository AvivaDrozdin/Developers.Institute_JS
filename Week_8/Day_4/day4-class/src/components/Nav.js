import {Link} from 'react-router-dom'




const Nav = (props) => {
    return(
        <>
        {/* Links to about/home/contact route in App.js */}
            <Link to='/'> Home </Link> |
            <Link to='/about'> About </Link>  |
            <Link to='/contact'> Contact </Link> |

            <Link to='/parent'>Parent</Link>


        </>
    )
}

export default Nav