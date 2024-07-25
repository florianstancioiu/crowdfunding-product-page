import classes from './App.module.css';
import Header from './components/Header';
import BackThisProject from './components/BackThisProject';
import TotalBackers from './components/TotalBackers';
import AboutProject from './components/AboutProject';
import { default as ThankYouModal } from './components/modals/ThankYou';

const App = () => {
  return (
    <>
      <Header />
      <ThankYouModal show={true} />
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
