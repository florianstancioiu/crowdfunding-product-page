import classes from './BackThisProject.module.css';
import { createPortal } from 'react-dom';
import { default as Modal } from './Base';
import ModalPledge from '../ui/ModalPledge';

const pledges = [
  {
    id: 1,
    isSelected: false,
    title: 'Pledge with no reward',
    description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
    pledge: 0,
    minimumPledge: 0,
    maximumPledge: 0,
    remainingPledges: 101,
  },
  {
    id: 2,
    isSelected: true,
    title: 'Bamboo Stand',
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
    pledge: 25,
    minimumPledge: 25,
    maximumPledge: 75,
    remainingPledges: 101,
  },
  {
    id: 3,
    isSelected: false,
    title: 'Black Edition Stand',
    description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    pledge: 75,
    minimumPledge: 75,
    maximumPledge: 200,
    remainingPledges: 64,
  },
  {
    id: 4,
    isSelected: false,
    title: 'Mahogany Special Edition',
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    pledge: 200,
    minimumPledge: 200,
    maximumPledge: 100000,
    remainingPledges: 0,
  },
];

const BackThisProject = ({ show = true, closeModal }) => {
  return (
    <>
      {show &&
        createPortal(
          <Modal
            title='Back this project'
            hasCloseBtn={true}
            closeModal={closeModal}
          >
            <p className={classes.description}>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <div className={classes['pledges-wrapper']}>
              {pledges.map((pledge) => (
                <ModalPledge
                  key={pledge.id}
                  isSelected={pledge.isSelected}
                  title={pledge.title}
                  description={pledge.description}
                  pledge={pledge.pledge}
                  minimumPledge={pledge.minimumPledge}
                  maximumPledge={pledge.maximumPledge}
                  remainingPledges={pledge.remainingPledges}
                />
              ))}
            </div>
          </Modal>,
          document.getElementById('modal-root')
        )}
    </>
  );
};

export default BackThisProject;
