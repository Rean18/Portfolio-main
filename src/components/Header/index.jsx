import { Link } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
    return (
        <header>
            <div className='img-container'>
                <img src='/assets/images/illustration-rémi.webp' alt="" />
            </div>
            <nav>
                <ul>
                    <li> <Link to='/#about'>A propos</Link> </li>
                    <li> <Link>Compétences</Link> </li>
                    <li> <Link>Projets</Link> </li>
                    <li> <Link>Contact</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header