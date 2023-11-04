import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./components/data"
import Hero from "./components/Hero"

function App() {
  
      const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}

            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
    

}

export default App
