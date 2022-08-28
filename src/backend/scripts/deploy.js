const hre = require("hardhat");

const main = async () => {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(1);

  await nft.deployed();
  console.log("NFT deployed to", nft.address);

  await marketplace.deployed();
  console.log("MARKETPLACE deployed to", marketplace.address);

}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.err;
  }
}

runMain();