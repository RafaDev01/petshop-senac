import './Navbar.css';
import { Search, Heart } from 'akar-icons'

export default function Navbar(){
    return (
        <nav>
            <div>
                <ul className='nav-links'>
                    <li>Início</li>
                    <li>Comprar</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                </ul>

                <div className='nav-actions'>
                    <div className='search-bar'>
                        <input type="text" placeholder='Pesquise aqui...'/>
                        <button className='search-icon'><Search className='icon' size={20} /></button>
                    </div>
                    <button>
                        <Heart strokeWidth={2} size={36} />
                    </button>
                </div>
            </div>
        </nav>
    )
}