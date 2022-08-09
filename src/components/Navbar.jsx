import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className='navbar'>
      <span className='navbar__logo'>Travell</span>

      {menuClicked ? (
        <FiX size={25} className='navbar__menu' onClick={toggleMenuClick} /> 
      ) : (
        <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClick} /> 
      )}
      <ul className={ !menuClicked ? 'navbar__list' : 'navbar__list navbar__list-active'}>
        {navbarLinks.map((item) => {
          return (
            <li className='navbar__item' key={item.title}>
              <a href={item.url} className='navbar__link'>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar