import classes from './ModalPledge.module.css';
import AmountInput from './AmountInput';
import Button from './Button';
import Checkbox from './Checkbox';

const ModalPledge = ({
  isSelected,
  title,
  description,
  pledge,
  minimumPledge,
  maximumPledge,
  remainingPledges,
}) => {
  const wrapperClasses = isSelected
    ? `${classes.pledge} ${classes.active}`
    : classes.pledge;

  const showMinimumPledge = minimumPledge !== 0;

  return (
    <div className={wrapperClasses}>
      <div className={classes['pledge-inner']}>
        <div className={classes['checkbox-wrapper']}>
          <Checkbox isActive={isSelected} />
          <div className={classes['title-wrapper']}>
            <p className={classes.title}>{title}</p>
            {showMinimumPledge && (
              <p className={classes['minimum-pledge']}>
                Pledge ${minimumPledge} or more
              </p>
            )}
          </div>
        </div>
        <p className={classes.description}>{description}</p>
        <div className={classes['pledges-left-wrapper']}>
          <p className={classes['pledges-left']}>{remainingPledges}</p>
          <p className={classes['pledges-left-text']}>left</p>
        </div>
      </div>
      {isSelected && (
        <div className={classes['enter-pledge-wrapper']}>
          <div className={classes['pledge-inner']}>
            <p className={classes['enter-pledge-title']}>Enter your pledge</p>
            <div className={classes['enter-pledge-inner']}>
              <AmountInput
                prefix='$'
                value={pledge}
                minValue={minimumPledge}
                maxValue={maximumPledge}
              />
              <Button title='Continue' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPledge;
