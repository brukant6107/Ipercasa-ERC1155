const hre = require("hardhat");

async function main() {

    const contractAddress = "0x7324cf4deba36d205f075bb436c891d15842b318";

    const treasuryAddress = "0xE297eb6e3826b4901100F5449aff7E43D3327d0A";

    const VIP_ID = 4;
    const amount = 10;

    const contract = await hre.ethers.getContractAt(
        "IpercasaTest1155",
        contractAddress
    );

    const tx = await contract.mint(
        treasuryAddress,
        VIP_ID,
        amount,
        "0x"
    );

    console.log("Transacción enviada:", tx.hash);

    await tx.wait();

    console.log("¡Mint realizado correctamente!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});