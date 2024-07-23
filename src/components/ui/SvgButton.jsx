import classes from './SvgButton.module.css';

const SvgButton = ({ svg, className }) => {
  const newClasses = !className ? '' : className;

  return (
    <div className={`${classes.btn} ${newClasses}`}>
      <img src={svg} alt='' />
    </div>
  );
};

export default SvgButton;
