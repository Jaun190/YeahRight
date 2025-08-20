// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GrowEmpire {
    address public owner;
    mapping(address => uint256) public subscriptions;
    mapping(address => uint256) public miningRates;

    enum Plan { None, Basic, Pro, Elite }
    mapping(uint8 => uint256) public planPrices;
    mapping(uint8 => uint256) public planRates;

    constructor() {
        owner = msg.sender;
        planPrices[1] = 0.01 ether;
        planPrices[2] = 0.02 ether;
        planPrices[3] = 0.05 ether;

        planRates[1] = 100; // Basic Mining Power
        planRates[2] = 250; // Pro Mining Power
        planRates[3] = 600; // Elite Mining Power
    }

    function subscribe(uint8 plan) external payable {
        require(plan >= 1 && plan <= 3, "Invalid plan");
        require(msg.value == planPrices[plan], "Wrong amount");

        subscriptions[msg.sender] = plan;
        miningRates[msg.sender] = planRates[plan];
    }

    function getUserPlan(address user) external view returns (uint8) {
        return uint8(subscriptions[user]);
    }

    function withdraw() external {
        require(msg.sender == owner, "Only admin");
        payable(owner).transfer(address(this).balance);
    }
}
