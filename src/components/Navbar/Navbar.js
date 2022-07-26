import logo from '../../images/AirbnbLogo.png';
import Search from '../Search/Search';
import './Navbar.css'

function Navbar(){
    return (
        <nav className='navbar'>
            <img src={logo} className='nav-image' />
            <Search />
        </nav>
    )
}

export default Navbar;