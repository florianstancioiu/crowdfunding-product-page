import Header from './components/Header';
import BackThisProject from './components/BackThisProject';
import TotalBackers from './components/TotalBackers';
import AboutProject from './components/AboutProject';
import Rewards from './components/Rewards';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <BackThisProject />
        <TotalBackers />
        <AboutProject />
        <Rewards />
      </main>
    </>
  );
};

export default App;
