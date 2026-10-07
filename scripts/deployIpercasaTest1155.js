async function main() {
  const Contract = await ethers.getContractFactory("IpercasaTest1155");
  
  const contract = await Contract.deploy(); //SIN BASE URI

  await contract.waitForDeployment();

  console.log("Test contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});