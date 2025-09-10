import HeroImg from '../../assets/heroImg.svg'
import './Hero.css'
import CTAButton from '../ctaBtn/CTABtn'

const Hero = ({title, paragrafo}) => {
    return(
        <section className='hero'>
            <div className='hero-content'>
                <span className='subtitle'>Pet Shop</span>
                <h1>{title}</h1>
                <p>{paragrafo}</p>
                <CTAButton text="Comprar agora"/>
            </div>
            <div className='hero-image-container '>
                <img className='img-hero' src={HeroImg} alt="hero img" />
            </div>
        </section>
    )
}

export default Hero;