import classes from './Checkbox.module.css';

const Checkbox = ({ isActive, onClick }) => {
  const newClasses = isActive
    ? `${classes.active} ${classes.checkbox}`
    : classes.checkbox;

  return (
    <div onClick={onClick} className={newClasses}>
      <div className={classes['checkbox-inner']}></div>
    </div>
  );
};

export default Checkbox;
