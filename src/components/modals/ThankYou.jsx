import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from './ThankYou.module.css';
import { default as Modal } from './Base';
import Button from '../ui/Button';
import checkSvg from '../../images/icon-check.svg';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product';

const ThankYou = ({ show = true, onOverlayClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [show]);

  const dispatch = useDispatch();

  const hideModalOnBtnClick = () => {
    dispatch(productActions.hideThankYouModal());
  };

  return (
    <>
      {show &&
        createPortal(
          <Modal
            hasCloseBtn={false}
            onOverlayClick={onOverlayClick}
            extraClasses={classes['thank-you-modal']}
          >
            <img className={classes['check-img']} src={checkSvg} alt='' />
            <p className={classes.title}>Thanks for your support!</p>
            <p className={classes.description}>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <Button
              onClick={hideModalOnBtnClick}
              className={classes['modal-btn']}
              title='Got it!'
            ></Button>
          </Modal>,
          document.getElementById('modal-root')
        )}
    </>
  );
};

export default ThankYou;
