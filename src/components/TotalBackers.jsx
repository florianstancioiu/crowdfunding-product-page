import classes from './TotalBackers.module.css';
import ProgressBar from './ui/ProgressBar';

const TotalBackers = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <div className={classes.item}>
          <p className={classes.title}>$89,914</p>
          <p className={classes['under-title']}>of $100,000 backed</p>
          <div className={classes.line}></div>
        </div>
        <div className={classes.item}>
          <p className={classes.title}>5,007</p>
          <p className={classes['under-title']}>total backers</p>
          <div className={classes.line}></div>
        </div>
        <div className={classes.item}>
          <p className={classes.title}>56</p>
          <p className={classes['under-title']}>days left</p>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default TotalBackers;
