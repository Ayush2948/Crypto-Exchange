// https://eth-sepolia.g.alchemy.com/v2/4Siy178McSHUDAx7H_CzP_E7KN_OLH-2
require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/4Siy178McSHUDAx7H_CzP_E7KN_OLH-2",
      accounts :['6b3fd3e061f87a7c60afe379f3cfe7c05b9f72118e4b681d61106a7d1d122341']
    }
  }
}

