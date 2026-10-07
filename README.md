# Ipercasa ERC-1155

Personal blockchain project developed for Ipercasa using the ERC-1155 multi-token standard.

The project implements a collection of four digital assets designed for the Ipercasa ecosystem, combining membership, discounts, rewards and recognition tokens.

## Tokens

The ERC-1155 contract manages four token types:

1. VIP Pass
2. Coupon
3. Ipercasa Coin
4. Founder Badge

Each token can have its own metadata and image stored using IPFS-compatible URIs.

## Smart Contract

The main smart contract is:

`IpercasaTest1155.sol`

The contract is based on the OpenZeppelin ERC-1155 implementation and includes functionality for:

- Minting ERC-1155 tokens
- Batch minting
- Token transfers
- Owner-controlled minting
- Custom token URIs
- Base URI support
- Metadata management
- Access control for administrative functions

## Metadata and Images

The project contains metadata for the four Ipercasa tokens:

- `1.json`
- `2.json`
- `3.json`
- `4.json`

Associated token images are stored in the project as:

- `n1.png`
- `n2.png`
- `n3.png`
- `n4.png`

The metadata structure is designed to be compatible with IPFS and NFT marketplaces.

## Tests

The smart contract includes automated tests developed with Hardhat, Ethers.js, Mocha and Chai.

The test suite verifies:

- Owner minting
- Token transfers
- Batch minting
- Setting and retrieving token URIs
- Custom URI behavior
- Base URI behavior
- Unauthorized mint protection
- Unauthorized URI modification protection

Run the tests with:

```shell
npx hardhat test
```

## Gas Report

Gas usage can be analyzed using:

```shell
REPORT_GAS=true npx hardhat test
```

## Scripts

The project includes scripts for deployment and token management, including:

- Contract deployment
- Initial token minting
- Token URI configuration
- VIP token minting
- Owner verification

## Technologies

- Solidity
- ERC-1155
- OpenZeppelin Contracts
- Hardhat
- Ethers.js
- JavaScript
- IPFS
- Mocha
- Chai

## Purpose

This project explores the practical use of ERC-1155 tokens inside the Ipercasa ecommerce ecosystem.

The different token types are designed to represent membership access, promotional coupons, rewards and founder recognition within a single multi-token smart contract.

## Author

Bruno Cantelmi

Ipercasa, INC
