import imageGrid from '../../images/image-grid.png';
import './Hero.css';

function Hero() {
    return(
        <div className='hero'>
            <img src={imageGrid} className='hero-image' />
            <div className='hero-text'>
                <h1>Online experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}

export default Hero;