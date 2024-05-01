require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/oK7Q_QEGEJYjRUzwFEoONkSX4LHlHzY2",
      accounts: [
        "969fdc97a485a81829f15d5dd03a8915012e057a21e09e8fa9f8f06a5e0b93fa",
      ],
    },
  },
};
