import './Carousel.css';
import { ArrowLeft, ArrowRight } from "akar-icons";
import { useRef } from 'react';

const Carousel = ({ title }) => {

    const carouselRef = useRef(null)

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    }

    return (
        <section className="carousel-section">
                <div className="carousel-header">
                    <h2>{title}</h2>
                <div className="carousel-nav">
                    <button className="nav-btn">
                        <ArrowLeft className='nav-icon' onClick={scrollLeft}/>
                    </button>
                    <button className="nav-btn">
                        <ArrowRight className='nav-icon' onClick={scrollRight}/>
                    </button>
                </div>
            </div>

            <div className='cards-container' ref={carouselRef}>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
            </div>

        </section>  
    )
}

export default Carousel;