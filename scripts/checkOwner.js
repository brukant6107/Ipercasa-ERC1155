const hre = require("hardhat");

async function main() {
  const contractAddress = "0x7324cf4deba36d205f075bb436c891d15842b318";

  const [signer] = await hre.ethers.getSigners();

  const contract = await hre.ethers.getContractAt("Ipercasa", contractAddress);

  console.log("Wallet que firma desde .env:", signer.address);

  const owner = await contract.owner();
  console.log("Owner del contrato:", owner);

  if (signer.address.toLowerCase() === owner.toLowerCase()) {
    console.log("OK: esta wallet ES el owner.");
  } else {
    console.log("ERROR: esta wallet NO es el owner.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});