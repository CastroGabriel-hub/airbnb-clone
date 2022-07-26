import cardImage from '../../images/card01.png';
import { FaStar } from 'react-icons/fa';
import './Card.css'

function Card() {
    return(
        <div className='card'>
            <img src={cardImage} className='card-image' ></img>
            <div className='card-opinion'>
                <FaStar className='star'/>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    );
}

export default Card;