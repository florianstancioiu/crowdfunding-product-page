import classes from './Menu.module.css';

const Menu = () => {
  return (
    <div className={classes.menu}>
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
