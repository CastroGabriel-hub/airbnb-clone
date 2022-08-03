import { FaStar } from 'react-icons/fa';
import './Card.css'

function Card(props) {
    return(
        <div className='card'>
            <img src={props.img} className='card-image' ></img>
            <div className='card-opinion'>
                <FaStar className='star'/>
                <span>{ props.rating }</span>
                <span className='gray'>({ props.reviewCount }) •</span>
                <span className='gray'>{ props.location }</span>
            </div>
            <p>{ props.title }</p>
            <p><strong>From { props.price }</strong> / person</p>
        </div>
    );
}

export default Card;