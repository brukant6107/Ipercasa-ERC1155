// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract Ipercasa is ERC1155, Ownable, ERC1155Supply {

    // IDs de tus tokens
    uint256 public constant COIN = 1;
    uint256 public constant COUPON = 2;
    uint256 public constant VIP = 3;
    uint256 public constant FOUNDER = 4;

    constructor() ERC1155("ipfs://bafybeietnrto4w6ulzt2jlkcyudzu65gt7wesil2xnzjajuxoajdxmum4y/{id}.json")    {
        
        // Mint inicial (ejemplo mezcla fungible + NFT)

        _mint(msg.sender, COIN, 1000, "");     // fungible
        _mint(msg.sender, COUPON, 500, "");    // fungible

        _mint(msg.sender, VIP, 1, "");         // NFT
        _mint(msg.sender, FOUNDER, 1, "");     // NFT
    }

    function mintToken(address to, uint256 id, uint256 amount) public onlyOwner {
        _mint(to, id, amount, "");
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }   
}