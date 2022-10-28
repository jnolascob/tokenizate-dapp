require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://goerli.infura.io/v3/dec0eb1e0ded4068ba13d0f2c9d4939b',
      accounts: [
        // '0xyarnc62bb9db9f68addd90f2f47e6a865fba54389c77ac74b89c7471518da76cdbb5',
        '0xc62bb9db9f68addd90f2f47e6a865fba54389c77ac74b89c7471518da76cdbb5'
      ]
    }
  }
};
