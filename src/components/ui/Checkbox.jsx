import classes from './Checkbox.module.css';

const Checkbox = ({ isActive }) => {
  const newClasses = isActive
    ? `${classes.active} ${classes.checkbox}`
    : classes.checkbox;

  return (
    <div className={newClasses}>
      <div className={classes['checkbox-inner']}></div>
    </div>
  );
};

export default Checkbox;
