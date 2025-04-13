import React, { useState, useEffect } from 'react';

// Simple custom live indicator component instead of using external libraries
const LiveIndicator = () => (
  <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
);
 
const ServiceCard = ({ title, subtitle, live }) => (
  <div
    className="flex flex-col justify-center items-center bg-slate-800 bg-opacity-30 p-4 m-2 cursor-pointer hover:shadow-xl rounded-lg"
    style={{
      backdropFilter: 'blur(15px)',
      width: '150px',
      height: '150px',
      textAlign: 'center',
    }}
  >
    <div className="w-10 h-10 rounded-full flex justify-center items-center bg-slate-700">
      {/* Using crypto symbol as fallback */}
      <span className="text-lg font-bold text-white">{title.substring(0, 3).toUpperCase()}</span>
    </div>
    <div className="mt-3">
      <h1 className="text-white text-lg">{title}</h1>
      <div className="flex justify-center items-center">
        <p className="text-white text-sm">{subtitle}</p>
        {live && <LiveIndicator />}
      </div>
    </div>
  </div>
);

const CryptoChart = () => {
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  // List of cryptocurrencies to display
  const cryptoList = [
    'bitcoin', 'ethereum', 'litecoin', 'solana', 
    'dogecoin', 'cardano', 'polkadot', 'ripple', 
    'usd-coin', 'chainlink'
  ];

  // Function to fetch crypto prices using CoinGecko API
  const fetchCryptoPrices = async () => {
    setIsFetching(true);
    setError(null);
    
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,solana,dogecoin,cardano,polkadot,ripple,usd-coin,chainlink&vs_currencies=usd');
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform data into the format we need
      const prices = {};
      Object.keys(data).forEach(crypto => {
        prices[crypto] = {
          name: crypto.charAt(0).toUpperCase() + crypto.slice(1),
          price: data[crypto].usd.toFixed(2)
        };
      });
      
      setCryptoPrices(prices);
    } catch (error) {
      console.error("Error fetching crypto prices:", error);
      setError("Could not fetch live data. Please try again later.");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
    
    const intervalId = setInterval(() => {
      fetchCryptoPrices();
    }, 60000); // Update every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white p-8 rounded-lg shadow-lg w-4/5 mx-auto text-center">
      <h1 className="text-3xl sm:text-5xl py-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
        Live Cryptocurrency Prices
      </h1>
      
      {error && (
        <div className="mt-4 mb-6 text-red-400 text-sm">
          {error}
        </div>
      )}
      
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
        {cryptoList.map(crypto => (
          <ServiceCard
            key={crypto}
            title={cryptoPrices[crypto]?.name || crypto}
            subtitle={cryptoPrices[crypto] ? `$${cryptoPrices[crypto].price}` : 'Loading...'}
            live={!isFetching && cryptoPrices[crypto]}
          />
        ))}
      </div>

      <button
        onClick={fetchCryptoPrices}
        disabled={isFetching}
        className={`mt-8 px-6 py-3 rounded-md text-white transition-colors ${
          isFetching ? 'bg-blue-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isFetching ? 'Updating...' : 'Update Prices'}
      </button>
      
      {isFetching && (
        <p className="mt-2 text-blue-300 text-sm">Fetching latest prices...</p>
      )}
    </div>
  );
};

export default CryptoChart;
