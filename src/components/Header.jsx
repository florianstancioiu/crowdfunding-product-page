import classes from './Header.module.css';
import logoSvg from '../images/logo.svg';
import hamburgerSvg from '../images/icon-hamburger.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <a href='#'>
          <img src={logoSvg} alt='Crowdfunding Logo Image' />
        </a>

        <img className={classes.hamburger} src={hamburgerSvg} alt='' />
      </div>
    </header>
  );
};

export default Header;
