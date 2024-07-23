import classes from './Button.module.css';

const Button = ({ title, disabled }) => {
  const btnClassName = disabled
    ? `${classes.btn} ${classes.disabled}`
    : classes.btn;

  return <div className={btnClassName}>{title}</div>;
};

export default Button;
