import React, { useState, useEffect } from 'react'; // Ensure useState and useEffect are imported
import axios from 'axios';
import { BsCircleFill } from 'react-icons/bs'; // Import live icon

const ServiceCard = ({ color, title, icons, subtitle, live }) => (
  <div
    className="flex flex-col justify-center items-center white-glassmorphism p-4 m-2 cursor-pointer hover:shadow-xl"
    style={{
      backdropFilter: 'blur(15.5px)',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '150px', // Set width to create a square
      height: '150px', // Set height to create a square
      textAlign: 'center',
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(to left, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
    }}
  >
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icons}
    </div>
    <div className="mt-3">
      <h1 className="text-white text-lg">{title}</h1>
      <div className="flex justify-center items-center">
        <p className="text-white text-sm">{subtitle}</p>
        {live && <BsCircleFill className="text-green-500 ml-2" size={12} />} {/* Live icon */}
      </div>
    </div>
  </div>
);

const CryptoChart = () => {
  const [cryptoPrices, setCryptoPrices] = useState({
    bitcoin: null,
    ethereum: null,
    litecoin: null,
    solana: null,
    dogecoin: null,
    cardano: null,
    polkadot: null,
    xrp: null,
    usdc: null,
    chainlink: null
  });
  const [isFetching, setIsFetching] = useState(false);

  // Function to fetch live prices
  const fetchCryptoPrices = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets');
      const topCryptos = ['bitcoin', 'ethereum', 'litecoin', 'solana', 'dogecoin', 'cardano', 'polkadot', 'xrp', 'usdc', 'chainlink'];

      const prices = {};
      topCryptos.forEach((crypto) => {
        const cryptoData = response.data.data.find((item) => item.id === crypto);
        if (cryptoData) {
          prices[crypto] = {
            name: cryptoData.name,
            price: parseFloat(cryptoData.priceUsd).toFixed(2),
          };
        }
      });

      setCryptoPrices(prices);
    } catch (error) {
      console.error("Error fetching crypto prices:", error);
    }
    setIsFetching(false);
  };

  // Fetch prices initially and set interval for updates every 1 minute
  useEffect(() => {
    fetchCryptoPrices(); // Fetch prices on initial load

    const intervalId = setInterval(() => {
      fetchCryptoPrices(); // Fetch prices every 1 minute
    }, 60000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div style={{
      color: 'white',
      padding: '65px 0',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: '80%',
      margin: 'auto',
      textAlign: 'center'
    }}>
      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
        Live Cryptocurrency Prices
        <br />
      </h1>
      <h1 className='text-transparent'> gg</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Bitcoin Price */}
        <ServiceCard
          title="Bitcoin"
          icons={<img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035" alt="Bitcoin" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.bitcoin ? cryptoPrices.bitcoin.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Ethereum Price */}
        <ServiceCard
          title="Ethereum"
          icons={<img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035" alt="Ethereum" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.ethereum ? cryptoPrices.ethereum.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Litecoin Price */}
        <ServiceCard
          title="Litecoin"
          icons={<img src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=035" alt="Litecoin" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.litecoin ? cryptoPrices.litecoin.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Solana Price */}
        <ServiceCard
          title="Solana"
          icons={<img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=035" alt="Solana" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.solana ? cryptoPrices.solana.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Dogecoin Price */}
        <ServiceCard
          title="Dogecoin"
          icons={<img src="https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=035" alt="Dogecoin" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.dogecoin ? cryptoPrices.dogecoin.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Cardano Price */}
        <ServiceCard
          title="Cardano"
          icons={<img src="https://cryptologos.cc/logos/cardano-ada-logo.png?v=035" alt="Cardano" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.cardano ? cryptoPrices.cardano.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Polkadot Price */}
        <ServiceCard
          title="Polkadot"
          icons={<img src="https://cryptologos.cc/logos/polkadot-dot-logo.png?v=035" alt="Polkadot" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.polkadot ? cryptoPrices.polkadot.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* XRP Price */}
        <ServiceCard
          title="XRP"
          icons={<img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035" alt="XRP" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.xrp ? cryptoPrices.xrp.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* USDC Price */}
        <ServiceCard
          title="USDC"
          icons={<img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=035" alt="USDC" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.usdc ? cryptoPrices.usdc.price : 'Loading...'}`}
          live={true} // Show live icon
        />

        {/* Chainlink Price */}
        <ServiceCard
          title="Chainlink"
          icons={<img src="https://cryptologos.cc/logos/chainlink-link-logo.png?v=035" alt="Chainlink" style={{ width: '40px', height: '40px' }} />}
          subtitle={`$${cryptoPrices.chainlink ? cryptoPrices.chainlink.price : 'Loading...'}`}
          live={true} // Show live icon
        />
      </div>

      {/* Button to manually trigger update */}
      <button
        onClick={fetchCryptoPrices}
        disabled={isFetching}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '1rem',
          marginTop: '30px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        {isFetching ? 'Updating...' : 'Update Prices'}
      </button>
    </div>
  );
};

export default CryptoChart;
