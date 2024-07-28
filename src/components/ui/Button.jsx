import classes from './Button.module.css';

const Button = ({ title, disabled, className, onClick }) => {
  const newClasses = !className ? '' : className;

  const btnClassName = disabled
    ? `${classes.btn} ${classes.disabled} ${newClasses}`
    : `${classes.btn} ${newClasses}`;

  return (
    <div onClick={onClick} className={btnClassName}>
      {title}
    </div>
  );
};

export default Button;
