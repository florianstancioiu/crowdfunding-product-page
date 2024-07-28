import classes from './Base.module.css';
import timesSvg from '../../images/icon-close-modal.svg';

const Base = ({ hasCloseBtn = true, title, children, onOverlayClick }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay} onClick={onOverlayClick}></div>
      <div className={classes.modal}>
        {hasCloseBtn && (
          <div className={classes.header}>
            <p className={classes.title}>{title}</p>
            <img
              className={classes['times-icon']}
              onClick={onOverlayClick}
              src={timesSvg}
              alt=''
            />
          </div>
        )}
        <div className={classes.body}>{children}</div>
      </div>
    </div>
  );
};

export default Base;
