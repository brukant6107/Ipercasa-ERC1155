// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Ipercasa ERC1155 Contract
/// @author Bruno Cantelmi
/// @notice Smart contract for managing Ipercasa NFTs (ERC1155)
/// @dev Uses OpenZeppelin ERC1155 and Ownable



contract IpercasaTest1155 is ERC1155, Ownable {
    mapping(uint256 => string) private _tokenURIs;

/// @notice Initializes the contract with empty base URI

    constructor() ERC1155("")  {}

    /// @notice Mint a single token
/// @param to Address receiving the token
/// @param id Token ID
/// @param amount Quantity to mint
/// @param data Additional data (usually empty "0x")

    function mint(address to, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
        _mint(to, id, amount, data);
    }

    /// @notice Mint multiple tokens in batch
/// @param to Receiver address
/// @param ids Array of token IDs
/// @param amounts Array of quantities
/// @param data Additional data

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

   /// @notice Sets a custom metadata URI for a specific token
/// @dev Overrides default ERC1155 URI logic when set
/// @param id Token ID
/// @param newUri IPFS metadata URI (ipfs://...)

    function setTokenUri(uint256 id, string memory newUri) public onlyOwner {
        _tokenURIs[id] = newUri;
    }

    /// @notice Returns metadata URI for a token
/// @param id Token ID
/// @return URI string

    function getTokenUri(uint256 id) public view returns (string memory) {
        return _tokenURIs[id];
    }

    /// @notice Returns metadata URI for a token, using custom URI if set
/// @dev If a custom URI exists in _tokenURIs, it is returned. Otherwise fallback to base ERC1155 URI
/// @param id Token ID
/// @return URI string


    function uri(uint256 id) public view override returns (string memory) {
    string memory customUri = _tokenURIs[id];

    if (bytes(customUri).length > 0) {
        return customUri;
    }

    return super.uri(id);
    }
}