require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();
require("hardhat-docgen");

const { SEPOLIA_RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.20",
  
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
},

  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    polygon: {
    url: "https://polygon.drpc.org",
    accounts: [process.env.PRIVATE_KEY],
  },
},
  
  etherscan: {
    apiKey: ETHERSCAN_API_KEY  
  },

  docgen: {
  path: "./documentation",
  clear: true,
  runOnCompile: false,
  templates: "./templates",
  pages: "files",
},
};

