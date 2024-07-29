import classes from './Menu.module.css';

const Menu = ({ showOnDesktop = false }) => {
  const wrapperClasses = showOnDesktop
    ? `${classes['show-on-desktop']} ${classes.menu}`
    : classes.menu;

  return (
    <div className={wrapperClasses}>
      <div className={classes['inner-menu']}>
        <div className={classes.link}>
          <a href='#'>About</a>
        </div>
        <div className={classes.link}>
          <a href='#'>Discover</a>
        </div>
        <div className={classes.link}>
          <a href='#'>Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
