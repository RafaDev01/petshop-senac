import './App.css'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import CategoryCard from './components/categoryCard/CategoryCard'

function App() {

  return (
    <>
      <CategoryCard title={'Brinquedos'} productCount={84} image={'https://tse1.mm.bing.net/th/id/OIP.rzOKxfnIkYjpgcCxfVcM5QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'} />
    </>
  )
}

export default App
