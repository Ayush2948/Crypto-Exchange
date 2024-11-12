import React, { useState } from 'react';
import { FaWallet, FaGlobe, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

const TutorialCard = ({ color, title, icon, subtitle, isOpen, toggleOpen }) => (
  <div
    onClick={toggleOpen}
    className="relative w-60 h-60 cursor-pointer transform-gpu"
    style={{ perspective: '1000px' }}
  >
    <div
      className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isOpen ? 'rotate-y-180' : ''}`}
    >
      {/* Front Face */}
      <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col justify-center items-center p-6">
        <div className={`w-16 h-16 rounded-full flex justify-center items-center ${color} mb-4`}>
          {icon}
        </div>
        <h1 className="text-white text-xl font-semibold text-center">{title}</h1>
      </div>

      {/* Back Face */}
      <div className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col justify-center items-center p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rotate-y-180">
        <p className="text-white text-center text-lg">{subtitle}</p>
      </div>
    </div>
  </div>
);

const Tutorial = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#0f0e13] pt-[20px] pb-[70px]">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-8 py-6 px-4">
        <div className="flex-1 flex flex-col justify-start items-center w-full">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-center">
            How Users Can Use Cryptpay
          </h1>
          <h1 className="text-transparent text-3xl sm:text-2xl py-2 text-center">
            How Users Can Use Cryptpay
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 pb-8">
        <TutorialCard
          color="bg-[#3f8efc]"
          title="Download and Setup Metamask"
          icon={<FaWallet fontSize={32} className="text-white" />}
          subtitle="Install the Metamask wallet and complete the setup process."
          isOpen={openCard === 0}
          toggleOpen={() => handleToggle(0)}
        />
        <TutorialCard
          color="bg-[#7a42f4]"
          title="Access Cryptpay Platform"
          icon={<FaGlobe fontSize={32} className="text-white" />}
          subtitle="Visit the Cryptpay website and connect your Metamask wallet."
          isOpen={openCard === 1}
          toggleOpen={() => handleToggle(1)}
        />
        <TutorialCard
          color="bg-[#28a745]"
          title="Start Exchanging"
          icon={<FaExchangeAlt fontSize={32} className="text-white" />}
          subtitle="Select the cryptocurrencies you want to exchange, view live prices, and execute transactions."
          isOpen={openCard === 2}
          toggleOpen={() => handleToggle(2)}
        />
        <TutorialCard
          color="bg-[#ffc107]"
          title="Track Transactions"
          icon={<FaChartLine fontSize={32} className="text-white" />}
          subtitle="View your transaction history, including the unique GIFs generated for each transaction."
          isOpen={openCard === 3}
          toggleOpen={() => handleToggle(3)}
        />
      </div>
    </div>
  );
};

export default Tutorial;
