// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MiningPool {
    address public owner;
    mapping(address => uint256) public rates;

    constructor() {
        owner = msg.sender;
    }

    function buyPlan(uint8 plan) external payable {
        if(plan == 1) {
            require(msg.value == 0.01 ether, "Basic kostet 0.01 ETH");
            rates[msg.sender] += 10; // 10 Hash/s
        }
        else if(plan == 2) {
            require(msg.value == 0.05 ether, "Pro kostet 0.05 ETH");
            rates[msg.sender] += 100; // 100 Hash/s
        }
        else if(plan == 3) {
            require(msg.value == 0.1 ether, "Elite kostet 0.1 ETH");
            rates[msg.sender] += 300; // 300 Hash/s
        }
        else {
            revert("Unbekannter Plan");
        }
    }

    function getRate() external view returns(uint256) {
        return rates[msg.sender];
    }

    function withdraw() external {
        require(msg.sender == owner, "Nur Admin darf auszahlen");
        payable(owner).transfer(address(this).balance);
    }
}
