import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions, CryptoChart, Tutorial } from './components';
import { useRef } from 'react';

const App = () => {
  const servicesRef = useRef(null);
  const transactionsRef = useRef(null);
  const marketRef = useRef(null);
  const tutorialRef = useRef(null);

  const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTransactions = () => transactionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToMarket = () => marketRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTutorial = () => tutorialRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Router>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar 
            scrollToServices={scrollToServices} 
            scrollToTransactions={scrollToTransactions} 
            scrollToMarket={scrollToMarket}
            scrollToTutorial={scrollToTutorial}
          />
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>

        <div ref={marketRef} className="gradient-bg-cryptochart py-10">
          <CryptoChart />
        </div>

        <div ref={servicesRef} className="gradient-bg-services py-10">
          <Services />
        </div>
        
        <div ref={transactionsRef} className="gradient-bg-transactions py-10">
          <Transactions />
        </div>

        <div ref={tutorialRef} className="gradient-bg-tutorial ">
          <Tutorial />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
