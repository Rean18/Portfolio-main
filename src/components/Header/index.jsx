import { NavHashLink, HashLink } from 'react-router-hash-link';

import '../../styles/Header.css'

function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='img-container'>
                    <HashLink smooth to='/#section-presentation'><img src='/assets/images/illustration-rémi.webp' alt="" /></HashLink>
                    
                </div>
                <nav className=''>
                    <ul>
                        <li> <NavHashLink smooth to='/#about'>A propos</NavHashLink> </li>
                        <li> <NavHashLink smooth to='/#skills'>Compétences</NavHashLink> </li>
                        <li> <NavHashLink smooth to='/#project'>Projets</NavHashLink> </li>
                        <li> <NavHashLink smooth to='/#contact'>Contact</NavHashLink> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header