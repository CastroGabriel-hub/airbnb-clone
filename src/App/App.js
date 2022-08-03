import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card"
import cardImage01 from '../images/card01.png';
import data from '../data';

import './App.css'

function App(){
    const cards = data.map((item) => {
        return <Card 
                    img={item.image}
                    rating={item.stats.rating}
                    reviewCount={item.stats.reviewCount}
                    location={item.location}
                    title={item.title}
                    price={item.price}
                />
    })

    return (
        <div className="app">
            <Navbar />
            {/* <Hero /> */}
            {cards}
        </div>
    )
}

export default App;