import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card"
import data from '../data';

import './App.css'

function App(){
    

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <section className="cards-list">

                {data.map((item) => {
                    return <Card 
                        img={item.image}
                        rating={item.stats.rating}
                        reviewCount={item.stats.reviewCount}
                        location={item.location}
                        title={item.title}
                        price={item.price}
                    />
                })}
                
            </section>
        </div>
    )
}

export default App;