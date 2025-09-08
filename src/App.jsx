import './App.css'
import Navbar from './components/navbar/Navbar'
import CategoryCarousel from './components/categoryCarousel/categoryCarousel'
import AnimalCarousel from './components/animalCarousel/AnimalCarousel'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import FeaturedProducts from './components/featuredProducts/FeaturedProducts'
import ShopSidebar from './components/shopSidebar/ShopSidebar'
import ProductGrid from './components/productGrid/ProductGrid'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <FeaturedProducts />
      <AnimalCarousel />
      <ProductGrid />
      <Footer/>
    </>
  )
}

export default App
