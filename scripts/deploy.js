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
  const IssueTokens = await hre.ethers.getContractFactory('IssueTokens');
  const TokenStudents = await hre.ethers.getContractFactory('TokenStudents');
  const contract1 = await IssueTokens.deploy();
  const contract2 = await TokenStudents.deploy();
  
  await contract1.deployed();
  await contract2.deployed();
  console.log("Address of contract:", contract1.address , contract2.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
