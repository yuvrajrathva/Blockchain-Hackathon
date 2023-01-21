// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// const { ethers } = require("hardhat");
// require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

async function main() {
  const Vendor = await hre.ethers.getContractFactory('Vendor');
  const contract = await Vendor.deploy();
  
  await contract.deployed();
  console.log("Address of contract:", contract.address );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
