import HeroImg from '../../assets/heroImg.svg'
import './Hero.css'
import CTAButton from '../ctaBtn/CTABtn'

const Hero = () => {
  const heroList = {
    name: 'Pet Shop do Rafael',
    title: 'bem vindo',
    image: HeroImg,
    titleImg: 'img title',
    subtitle: 'subtitle',
    buttonHeroText: 'comprar',
    buttonHeroLink: '#'
  };
  
    return(
        <section className='hero'>
            <div className='hero-content'>
                <span className='subtitle'>Pet Shop</span>
                <h1>{heroList.title}</h1>
                <p>lorem djandasdasndasas sdiajhajoif asnfiasfjasfjfi</p>
                <CTAButton text="Comprar agora"/>
            </div>
            <div className='hero-image-container '>
                <img className='img-hero' src={HeroImg} alt="hero img" />
            </div>
        </section>
    )
}

export default Hero;