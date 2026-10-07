const {expect} = require("chai");

describe("IpercasaTest1155", function () {

  let owner, contract, addr1, addr2;

  const baseURI = "ipfs://test/{id}.json";

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("IpercasaTest1155");
    contract = await Factory.deploy();
    await contract.waitForDeployment();
  });

  it("owner mints tokens", async function () {
    await contract.mint(owner.address, 1, 10, "0x");
    await contract.mint(addr2.address, 3, 1, "0x4369616F207469206D616E646F203120746F6B656E");
    const balanceOwner = await contract.balanceOf(owner.address, 1);
    const balanceAddr2 = await contract.balanceOf(addr2.address, 3);

    expect(balanceOwner).to.equal(10);
    expect(balanceAddr2).to.equal(1);  
    
  });

  it("owner transfers tokens", async function () {
    await contract.mint(owner.address, 1, 10, "0x");
    await contract.safeTransferFrom(owner.address, addr1.address, 1, 5, "0x");
    const balanceOwner = await contract.balanceOf(owner.address, 1);
    const balanceAddr1 = await contract.balanceOf(addr1.address, 1);

    expect(balanceOwner).to.equal(5);
    expect(balanceAddr1).to.equal(5);
  });

  it("batch mint", async function () {
    await contract.mintBatch(owner.address, [2, 3], [20, 30], "0x");

    const balance2 = await contract.balanceOf(owner.address, 2);
    const balance3 = await contract.balanceOf(owner.address, 3);

    expect(balance2).to.equal(20);
    expect(balance3).to.equal(30);
  });

  it("sets and gets token uri", async function () {
  await contract.setTokenUri(1, "ipfs://custom/1.json");

  const tokenUri = await contract.getTokenUri(1);
  expect(tokenUri).to.equal("ipfs://custom/1.json");
});

it("returns custom uri if set", async function () {
  await contract.setTokenUri(1, "ipfs://custom/1.json");

  const tokenUri = await contract.uri(1);
  expect(tokenUri).to.equal("ipfs://custom/1.json");
});

it("returns base uri if custom uri is not set", async function () {
  const tokenUri = await contract.uri(1);
  expect(tokenUri).to.equal("");
});

it("non-owner cannot mint", async function () {
  await expect(
    contract.connect(addr1).mint(addr1.address, 1, 10, "0x")
  ).to.be.reverted;
});

it("non-owner cannot set token uri", async function () {
  await expect(
    contract.connect(addr1).setTokenUri(1, "ipfs://fake/1.json")
  ).to.be.reverted;
});

});