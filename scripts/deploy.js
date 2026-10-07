const hre = require("hardhat");

async function main() {
  const Ipercasa = await hre.ethers.getContractFactory("Ipercasa");

  const contract = await Ipercasa.deploy();

  await contract.waitForDeployment();

  console.log("✅ Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
