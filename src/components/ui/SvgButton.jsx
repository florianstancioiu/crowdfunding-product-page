import classes from './SvgButton.module.css';

const SvgButton = ({ svg }) => {
  return (
    <div className={classes.btn}>
      <img src={svg} alt='' />
    </div>
  );
};

export default SvgButton;
