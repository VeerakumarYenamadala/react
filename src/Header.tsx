import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Profile from './Profile';
import './Header.css';

interface MenuItem {
  label: string;
  link: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <header className="header">
      
      <NavMenu menuItems={menuItems} />
      <Profile />
    </header>
  );
};

export default Header;
