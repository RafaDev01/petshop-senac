import PetShopImg from '../assets/petshop.svg'

export default function Header(){
    return(
        <header>
            <h1>Bem vindo ao PetShop do Rafael!</h1>
            <img src={PetShopImg} alt="Ícone do petshop" width={300}/>
        </header>
    )
}