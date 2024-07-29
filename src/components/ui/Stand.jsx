import classes from './Stand.module.css';
import Button from './Button';

const Stand = ({
  title,
  pledge,
  description,
  amountLeft,
  onSelectRewardClick,
}) => {
  const disabledBtn = amountLeft === 0;
  const disabledBtnTitle = disabledBtn ? 'Out of Stock' : 'Select Reward';

  return (
    <div className={classes.stand}>
      <div className={classes['title-pledge-wrapper']}>
        <p className={classes.title}>{title}</p>
        <p className={classes.pledge}>Pledge ${pledge} or more</p>
      </div>
      <p className={classes.description}>{description}</p>
      <div className={classes['amount-reward-wrapper']}>
        <div className={classes['amount-left-wrapper']}>
          <p className={classes.amount}>{amountLeft}</p>
          <p className={classes.left}>left</p>
        </div>
        <div className={classes['reward-wrapper']}>
          <Button
            onClick={disabledBtn ? () => {} : onSelectRewardClick}
            title={disabledBtnTitle}
            disabled={disabledBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Stand;
