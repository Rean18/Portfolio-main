import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect, useRef } from 'react';
import '../../styles/Header.css';

function Header() {
  const [isTablet, setIsTablet] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const burgerMenuRef = useRef(null); // la ref ne pointe vers aucun élément du DOM

  // Création d'une fonction qui configure le useState en fonction d'une taillé d'écran
  const handleResize = () => {
    setIsTablet(window.innerWidth < 1240); // Si la largeur de l'écran est inféreieur à 1240px, devient true
  };

  useEffect(() => { // Rend l'élément lorsque <1240
    handleResize();
    window.addEventListener('resize', handleResize); //ajout d'un évènement 
    return () => {
      window.removeEventListener('resize', handleResize); // suppression de l'évènement
    };
  }, []);

  const handleBurgerMenu = () => {  // Inverse l'ouverture ou la fermeture de menu au click
    setOpenBurgerMenu(!openBurgerMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if(burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {  // Si la ref burgerMenu pointe vers la div et que le click est en dehors de la div alors on ferme le menu
            setOpenBurgerMenu(false);
        };
    }

        if(openBurgerMenu) {  // si le menu est ouvert, on écoute le click en dehors et on ferme
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    
  }, [openBurgerMenu]); // re-rendu chaque fois que openBurgerMenu change d'état

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