import logo from '../../images/AirbnbLogo.png';
import Search from '../Search/Search';
import LoginSection from '../LoginSection/LoginSection';
import './Navbar.css'

function Navbar(){
    return (
        <nav className='navbar'>
            <img src={logo} className='nav-image' />
            <Search />
            <LoginSection />
        </nav>
    )
}

export default Navbar;