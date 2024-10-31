import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavMenu.css';

interface MenuItem {
  label: string;
  link: string;
}

interface NavMenuProps {
  menuItems: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Burger icon or close icon based on menu state */}
      <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" color="white" />
      </div>

      {/* Side navigation menu */}
      <nav className={`side-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay to close menu when clicked outside */}
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </div>
  );
};

export default NavMenu;
