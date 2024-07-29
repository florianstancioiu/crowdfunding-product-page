import classes from './BackThisProject.module.css';
import mastercraftSvg from '../images/logo-mastercraft.svg';
import Button from './ui/Button';
import BookmarkBtn from './ui/BookmarkBtn';

import { productActions } from '../store/product';
import { useDispatch } from 'react-redux';

const BackThisProject = () => {
  const dispatch = useDispatch();

  const backThisProjectBtnClick = () => {
    dispatch(productActions.showBackThisProjectModal());
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes['img-wrapper']}>
        <img className={classes.logo} src={mastercraftSvg} alt='' />
      </div>

      <p className={classes.title}>Mastercraft Bamboo Monitor Riser</p>

      <p className={classes['under-title']}>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>

      <div className={classes['btn-wrapper']}>
        <Button onClick={backThisProjectBtnClick} title='Back this project' />
        <BookmarkBtn className={classes['svg-btn']} />
      </div>
    </div>
  );
};

export default BackThisProject;
