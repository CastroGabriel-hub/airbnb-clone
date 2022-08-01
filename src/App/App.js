import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card"
import cardImage01 from '../images/card01.png';
import './App.css'

function App(){
    return (
        <div className="app">
            <Navbar />
            {/* <Hero /> */}
            <Card 
                img = {cardImage01}
                rating = {5.0}
                reviewCount = {6}
                country = 'Brazil'
                title = 'Life lessons with Katie Zaferes'
                price = {136.00}
            />
        </div>
    )
}

export default App;