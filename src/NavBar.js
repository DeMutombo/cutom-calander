// Practice with Reacr Routing 
import {Link} from 'react-router-dom'
import './styles/Navigations.css'

const NavBar = () =>{
    return(
        <div className='Navigations'>
            <Link to='/'>Home</Link>
            <Link to='/calander'>Calander</Link>
            <Link to='/contact'>Contat</Link>
        </div>
    )
}
export default NavBar