var TRC20Detailed = artifacts.require("../TRC20Detailed.sol");

module.exports = function(deployer) {
  deployer.deploy(TRC20Detailed, 'MFT', 'My First Token', 8);
};
