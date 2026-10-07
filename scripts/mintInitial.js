async function main() {
  const contractAddress = "0x7324cf4DEba36D205F075bb436c891d15842b318";
  const recipient = "0xbde7479077DC1400F863cF7fbEe048E5768aE2F5";

  const contract = await ethers.getContractAt("IpercasaTest1155", contractAddress);

  console.log("Minting tokens to:", recipient);

  let tx;

  tx = await contract.mint(recipient, 1, 1000, "0x");
  await tx.wait();
  console.log("Minted token 1");

  tx = await contract.mint(recipient, 2, 500, "0x");
  await tx.wait();
  console.log("Minted token 2");

  tx = await contract.mint(recipient, 3, 1, "0x");
  await tx.wait();
  console.log("Minted token 3");

  tx = await contract.mint(recipient, 4, 1, "0x");
  await tx.wait();
  console.log("Minted token 4");

  console.log("Initial mint complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});