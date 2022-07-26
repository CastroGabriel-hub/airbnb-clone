import { FaGlobe, FaBars, FaUser } from 'react-icons/fa'
import './LoginSection.css';

function LoginSection() {
    return(
        <div className='section'>
            <p>Seja um anfitrião</p>
            <FaGlobe />
            <div className='user-icons'>
                <FaBars />
                <FaUser />
            </div>
        </div>
    );
}

export default LoginSection;