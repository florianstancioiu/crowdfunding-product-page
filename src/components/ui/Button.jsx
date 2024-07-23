import classes from './Button.module.css';

const Button = ({ title }) => {
  return <div className={classes.btn}>{title}</div>;
};

export default Button;
