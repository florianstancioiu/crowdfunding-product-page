import classes from './App.module.css';
import Header from './components/Header';
import BackThisProject from './components/BackThisProject';
import TotalBackers from './components/TotalBackers';
import AboutProject from './components/AboutProject';
import { default as ThankYouModal } from './components/modals/ThankYou';
import { default as BackThisProjectModal } from './components/modals/BackThisProject';

import { useSelector, useDispatch } from 'react-redux';
import { productActions } from './store/product';

const App = () => {
  const dispatch = useDispatch();
  const showThankYouModal = useSelector(
    (state) => state.product.showThankYouModal
  );
  const showBackThisProjectModal = useSelector(
    (state) => state.product.showBackThisProjectModal
  );
  const selectedPledge = useSelector((state) => state.product.selectedPledge);

  const onThankYouModalOverlayClick = () => {
    dispatch(productActions.hideThankYouModal());
  };

  const onBackThisProjectModalOverlayClick = () => {
    dispatch(productActions.hideBackThisProjectModal());
  };

  return (
    <>
      <Header />
      <ThankYouModal
        show={showThankYouModal}
        onOverlayClick={onThankYouModalOverlayClick}
      />
      <BackThisProjectModal
        show={showBackThisProjectModal}
        onOverlayClick={onBackThisProjectModalOverlayClick}
        selectedPledge={selectedPledge}
      />
      <main className={classes.wrapper}>
        <div className={classes['inner-wrapper']}>
          <BackThisProject />
          <TotalBackers />
          <AboutProject />
        </div>
      </main>
    </>
  );
};

export default App;
