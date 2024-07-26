import classes from './AmountInput.module.css';

const AmountInput = ({ prefix = false, value, minValue, maxValue }) => {
  return (
    <div className={classes['amount-input']}>
      {prefix && <span className={classes.prefix}>{prefix}</span>}
      <input type='text' className={classes.input} defaultValue={value} />
    </div>
  );
};

export default AmountInput;
