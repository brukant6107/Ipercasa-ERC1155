async function main() {
  const contractAddress = "0x7324cf4DEba36D205F075bb436c891d15842b318";
  const metadataCID = "bafybeigdxbpqqyczwjmokz4crzw5sgu42hyxbu6mcnlib7wgw4qftapqhe";

  const contract = await ethers.getContractAt("IpercasaTest1155", contractAddress);

  console.log("Setting token URIs...");

  let tx;

  tx = await contract.setTokenUri(1, `ipfs://${metadataCID}/1.json`);
  await tx.wait();
  console.log("Token 1 URI set");

  tx = await contract.setTokenUri(2, `ipfs://${metadataCID}/2.json`);
  await tx.wait();
  console.log("Token 2 URI set");

  tx = await contract.setTokenUri(3, `ipfs://${metadataCID}/3.json`);
  await tx.wait();
  console.log("Token 3 URI set");

  tx = await contract.setTokenUri(4, `ipfs://${metadataCID}/4.json`);
  await tx.wait();
  console.log("Token 4 URI set");

  console.log("All token URIs configured");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});