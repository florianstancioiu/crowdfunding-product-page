import classes from './AboutProject.module.css';
import Stand from './ui/Stand';

const stands = [
  {
    title: 'Bamboo Stand',
    pledge: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
    amountLeft: 101,
  },
  {
    title: 'Black Edition Stand',
    pledge: 75,
    description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    amountLeft: 64,
  },
  {
    title: 'Mahogany Special Edition',
    pledge: 200,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    amountLeft: 0,
  },
];

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
        {stands.map((stand, index) => (
          <Stand
            key={index}
            title={stand.title}
            pledge={stand.pledge}
            description={stand.description}
            amountLeft={stand.amountLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutProject;
