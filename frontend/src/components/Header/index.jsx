import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect, useRef } from 'react';
import '../../styles/Header.css';

function Header() {
  const [isTablet, setIsTablet] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const burgerMenuRef = useRef(null);

  // Création d'une fonction qui configure le useState en fonction d'une taillé d'écran
  const handleResize = () => {
    setIsTablet(window.innerWidth < 1240);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize); //ajout d'un évènement 
    return () => {
      window.removeEventListener('resize', handleResize); // suppression de l'évènement
    };
  }, []);

  const handleBurgerMenu = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if(burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
            setOpenBurgerMenu(false);
        };
    }

        if(openBurgerMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    
  }, [openBurgerMenu]);

  return (
    <header>
      <div className='header-container'>
        <div className='img-container'>
          <NavHashLink smooth to='/#section-presentation'>
            <img src='/assets/images/illustration-rémi.webp' alt="illustration de Rémi" />
          </NavHashLink>
        </div>
        <nav className='navbar'>
          {!isTablet ? (
            <ul className='nav-links'>
              <li><NavHashLink smooth to='/#about'>À propos</NavHashLink></li>
              <li><NavHashLink smooth to='/#skills'>Compétences</NavHashLink></li>
              <li><NavHashLink smooth to='/#project'>Projets</NavHashLink></li>
              <li><NavHashLink smooth to='/#contact'>Contact</NavHashLink></li>
            </ul>
          ) : (
            <div ref={burgerMenuRef}>
              <button onClick={ handleBurgerMenu }>
                <img id='burger-menu-icon' src="/assets/icons/burger-bar.png" alt="Menu burger" />
              </button>
                <ul className={`nav-links-mobile ${openBurgerMenu ? 'open' : ''}`}>                 
                <li><NavHashLink smooth to='/#about' onClick={handleBurgerMenu}>À propos</NavHashLink></li>
                  <li><NavHashLink smooth to='/#skills' onClick={handleBurgerMenu}>Compétences</NavHashLink></li>
                  <li><NavHashLink smooth to='/#project' onClick={handleBurgerMenu}>Projets</NavHashLink></li>
                  <li><NavHashLink smooth to='/#contact' onClick={handleBurgerMenu}>Contact</NavHashLink></li>
                </ul>
              
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;