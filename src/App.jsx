import classes from './App.module.css';
import Header from './components/Header';
import BackThisProject from './components/BackThisProject';
import TotalBackers from './components/TotalBackers';
import AboutProject from './components/AboutProject';
import Rewards from './components/Rewards';

const App = () => {
  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <div className={classes['inner-wrapper']}>
          <BackThisProject />
          <TotalBackers />
          <AboutProject />
          <Rewards />
        </div>
      </main>
    </>
  );
};

export default App;
