import { useState } from 'react';
import classes from './Header.module.css';
import logoSvg from '../images/logo.svg';
import hamburgerSvg from '../images/icon-hamburger.svg';
import timesSvg from '../images/icon-close-menu.svg';
import Menu from './ui/Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((value) => !value);
  };

  return (
    <header className={classes.header}>
      {!showMenu && (
        <div className={classes.wrapper}>
          <a href='#'>
            <img src={logoSvg} alt='Crowdfunding Logo Image' />
          </a>
          <img
            onClick={toggleMenu}
            className={classes.hamburger}
            src={hamburgerSvg}
            alt=''
          />
          <Menu showOnDesktop={true} />
        </div>
      )}
      {showMenu && (
        <div className={classes['menu-wrapper']}>
          <div className={classes['overlay']}>
            <div className={classes.wrapper}>
              <a href='#'>
                <img src={logoSvg} alt='Crowdfunding Logo Image' />
              </a>
              <img
                onClick={toggleMenu}
                className={classes.hamburger}
                src={timesSvg}
                alt=''
              />
            </div>
            <Menu />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
