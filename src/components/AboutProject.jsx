import classes from './AboutProject.module.css';
import Stand from './ui/Stand';
import { pledges } from '../pledges';

const AboutProject = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>About this project</p>
      <p className={classes.description}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className={classes.description}>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className={classes['stands-wrapper']}>
        {pledges.map(
          (stand, index) =>
            stand.pledge !== 0 && (
              <Stand
                key={index}
                title={stand.title}
                pledge={stand.pledge}
                description={stand.description}
                amountLeft={stand.remainingPledges}
              />
            )
        )}
      </div>
    </div>
  );
};

export default AboutProject;
