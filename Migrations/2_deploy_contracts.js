const deris = artifacts.require("deris");

module.exports = async function (deployer) {
  await deployer.deploy(deris);
  console.log(deris.address);
};
