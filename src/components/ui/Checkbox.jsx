import classes from './Checkbox.module.css';

const Checkbox = ({ isActive, disabled, onClick }) => {
  const newClasses = isActive
    ? `${classes.active} ${classes.checkbox}`
    : classes.checkbox;

  const newClasses2 = disabled
    ? `${newClasses} ${classes.disabled}`
    : newClasses;

  return (
    <div onClick={onClick} className={newClasses2}>
      <div className={classes['checkbox-inner']}></div>
    </div>
  );
};

export default Checkbox;
