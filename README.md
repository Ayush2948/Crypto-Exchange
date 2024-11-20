# Crypto Exchange Platform

This project is a cryptocurrency exchange platform built with modern web technologies. Users can connect their crypto wallets, view live cryptocurrency prices, and send crypto assets across the blockchain. The platform includes a responsive frontend, a smart contract backend, and live crypto price updates.

## Features

- **Wallet Connection**: Connect your crypto wallet to initiate transactions.
- **Live Price Updates**: View real-time prices for popular cryptocurrencies.
- **Blockchain Transactions**: Send crypto securely to any address on the blockchain.
- **Interactive UI**: Built with React and styled with Tailwind CSS for a smooth user experience.

## Project Structure

- `client`: The frontend React application where users interact with the platform.
- `smart_contract`: Contains the Solidity smart contracts deployed on the Sepolia Testnet.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [Metamask](https://metamask.io/) (for wallet integration)

## Getting Started

Follow these steps to run the project locally:

### Step 1: Clone the repository

```bash
git clone https://github.com/Ayush2948/Crypto-Exchange.git
cd Crypto-Exchange
```

### Step 2: Install Client Dependencies

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

### Step 3: Install Smart Contract Dependencies

Navigate to the `smart_contract` directory and install dependencies:

```bash
cd ../smart_contract
npm install
```

### Step 4: Compile the Smart Contracts

Compile the Solidity contracts with Hardhat:

```bash
npx hardhat compile
```

### Step 5: Start the Local Blockchain

Run a local blockchain instance with Hardhat:

```bash
npx hardhat node
```

### Step 6: Deploy Contracts (Optional)

You can deploy contracts to the Sepolia Testnet or any local network:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Step 7: Start the Client

Open a new terminal, navigate to the `client` folder, and start the frontend:

```bash
cd client
npm start
```

## Tools and Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: CSS framework for styling.
- **Hardhat**: Development environment for Ethereum.
- **Solidity**: Smart contract programming language.
- **Sepolia Testnet**: Ethereum test network for contract deployment.
- **VS Code**: Code editor.
- **GitHub**: Version control and collaboration platform.
- **CoinCap API**: API for live cryptocurrency prices.

## Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Harsh5442">
        <img src="https://i.postimg.cc/NfSn1KRn/Screenshot-2024-11-12-220207.png" width="100px;" alt="Harsh" />
        <br />
        <H3><b style="font-size: 24px;">Harsh</b></H3>
      </a>
      <br />
      <a href="https://github.com/Harsh5442" title="Code">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" />
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/harsh5442/" title="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="20" height="20" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pranav030203">
        <img src="https://i.postimg.cc/jdL6YxHn/about.jpg" width="100px;" alt="Pranav" />
        <br />
        <H3><b style="font-size: 24px;">Pranav</b></H3>
      </a>
      <br />
      <a href="https://github.com/pranav030203" title="Code">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" />
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/pranav-phadatare-07aa53239/" title="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="20" height="20" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Ayush2948">
        <img src="https://i.postimg.cc/C5rBXTwv/Screenshot-2024-11-12-215639.png" width="100px;" alt="Ayush" />
        <br />
        <H3><b style="font-size: 24px;">Ayush</b></H3>
      </a>
      <br />
      <a href="https://github.com/Ayush2948" title="Code">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" />
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/ayushp2948/" title="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="20" height="20" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Gauravc07">
        <img src="https://postimg.cc/HVTR3Yy0" width="100px;" alt="Gaurav" />
        <br />
        <H3><b style="font-size: 24px;">Gaurav</b></H3>
      </a>
      <br />
      <a href="https://github.com/Gauravc07" title="Code">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" />
      </a>
      &nbsp;
      <a href="#" title="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="20" height="20" />
      </a>
    </td>
  </tr>
</table>

## License

This project is licensed under the MIT License.
```
