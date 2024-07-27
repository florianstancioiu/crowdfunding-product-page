import classes from './AmountInput.module.css';

const AmountInput = ({ prefix = false, value, minValue, maxValue }) => {
  return (
    <div className={classes['amount-input']}>
      {prefix && <span className={classes.prefix}>{prefix}</span>}
      <input
        type='number'
        className={classes.input}
        defaultValue={value}
        min={minValue}
        max={maxValue}
      />
    </div>
  );
};

export default AmountInput;
