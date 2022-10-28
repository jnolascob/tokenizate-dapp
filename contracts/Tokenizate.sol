// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Tokenizate is ERC20 {
    constructor(uint256 initialSupply) ERC20("Jefrain", "JFR") {
        _mint(msg.sender, initialSupply);
    }
}