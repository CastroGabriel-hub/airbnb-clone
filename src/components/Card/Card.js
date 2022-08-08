import { FaStar } from 'react-icons/fa';
import './Card.css'

function Card(props) {
    let bedgeText;
    if(props.openSpots === 0){
        bedgeText = 'SOLD OUT';
    } else if(props.location === 'Online') {
        bedgeText = 'ONLINE'
    }

    return(
        <div className='card'>
            {bedgeText ? <div className='sold-out'>{bedgeText}</div> : null}
            <img src={props.image} className='card-image' />
            <div className='card-opinion'>
                <FaStar className='star'/>
                <span>{ props.stats.rating }</span>
                <span className='gray'>({ props.stats.reviewCount }) •</span>
                <span className='gray'>{ props.location }</span>
            </div>
            <p>{ props.title }</p>
            <p><strong>From { props.price }</strong> / person</p>
        </div>
    );
}

export default Card;