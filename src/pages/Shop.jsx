import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero"
import Footer from "../components/footer/Footer";
import ProductGrid from "../components/productGrid/ProductGrid"

const Shop = () => {
    return (
        <>
          <Navbar />
          <Hero title={"A loja amigvel do seu pet"} paragrafo={"Veja nossos produtos"}/>
          <ProductGrid />
          <Footer />  
        </>
    )
} 

export default Shop;