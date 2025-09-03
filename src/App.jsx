import './App.css'
import Navbar from './components/navbar/Navbar'
import CategoryCarousel from './components/categoryCarousel/categoryCarousel'
import AnimalCarousel from './components/animalCarousel/AnimalCarousel'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <AnimalCarousel />
    </>
  )
}

export default App
