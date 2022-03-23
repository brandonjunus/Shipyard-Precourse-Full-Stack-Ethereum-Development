require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    rinkby: {
      url: "https://rinkeby.infura.io/v3/5daafd1ea67c43efb61f2e04aaca3d93",
      accounts: [`0xe0bd88a12d75378138a53e478fa53c0cd59dcfaf18fb29b62298b43cbbabdee2`]
    }
  },
  solidity: "0.8.4",
};