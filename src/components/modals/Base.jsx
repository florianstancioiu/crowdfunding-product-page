import classes from './Base.module.css';
import timesSvg from '../../images/icon-close-modal.svg';

const Base = ({
  title,
  children,
  onOverlayClick,
  hasCloseBtn = true,
  extraClasses = '',
}) => {
  const modalClasses =
    extraClasses !== '' ? `${classes.modal} ${extraClasses}` : classes.modal;

  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay} onClick={onOverlayClick}></div>
      <div className={modalClasses}>
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
