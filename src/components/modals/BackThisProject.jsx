import { useEffect } from 'react';
import classes from './BackThisProject.module.css';
import { createPortal } from 'react-dom';
import { default as Modal } from './Base';
import ModalPledge from '../ui/ModalPledge';
import { pledges } from '../../pledges';

const BackThisProject = ({
  onOverlayClick,
  show = true,
  selectedPledge = null,
}) => {
  useEffect(() => {
    if (selectedPledge) {
      document
        .getElementById(`modal-pledge-${selectedPledge}`)
        .scrollIntoView();
    }
  }, [selectedPledge]);

  return (
    <>
      {show &&
        createPortal(
          <Modal
            title='Back this project'
            hasCloseBtn={true}
            onOverlayClick={onOverlayClick}
          >
            <p className={classes.description}>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <div className={classes['pledges-wrapper']}>
              {pledges.map((pledge) => (
                <ModalPledge
                  key={pledge.id}
                  id={pledge.id}
                  isSelected={selectedPledge === pledge.id}
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
