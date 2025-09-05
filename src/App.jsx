import './App.css'
import Navbar from './components/navbar/Navbar'
import CategoryCarousel from './components/categoryCarousel/categoryCarousel'
import AnimalCarousel from './components/animalCarousel/AnimalCarousel'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import FeaturedProducts from './components/featuredProducts.jsx/FeaturedProducts'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <FeaturedProducts />
      <AnimalCarousel />
      <Footer/>
    </>
  )
}

export default App
