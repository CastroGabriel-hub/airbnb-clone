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
                        key={item.id}
                        {...item}
                    />
                })}
            </section>

        </div>
    )
}

export default App;