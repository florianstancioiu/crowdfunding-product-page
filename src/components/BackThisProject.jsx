import classes from './BackThisProject.module.css';
import mastercraftSvg from '../images/logo-mastercraft.svg';
import bookmarkSvg from '../images/icon-bookmark.svg';
import Button from './ui/Button';
import SvgButton from './ui/SvgButton';

const BackThisProject = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['img-wrapper']}>
        <img className={classes.logo} src={mastercraftSvg} alt='' />
      </div>

      <p className={classes.title}>
        Mastercraft Bamboo <br />
        Monitor Riser
      </p>

      <p className={classes['under-title']}>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>

      <div className={classes['btn-wrapper']}>
        <Button title='Back this project' />
        <SvgButton className={classes['svg-btn']} svg={bookmarkSvg} />
      </div>
    </div>
  );
};

export default BackThisProject;
