// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IssueTokens.sol";

contract TokenStudents {
    // Issue new ID Card
    mapping(address => uint) public idCardMap;
    mapping(address => uint) public yearMap;

    uint public adminTokenBalance;
    function issueIdCard(address _newAddress, uint _currentYear) public {
        idCardMap[_newAddress] = 0;
        idCardMap[_newAddress] = _currentYear;
    }

    // Send Tokens from Admin to Student
    address public immutable admin;
    constructor (){
        admin = msg.sender;
    }

    modifier onlyAdmin{
        require(msg.sender == admin, "Sorry! only admin can issue Tokens");
        _;
    }
    function issueTokens(address _studentAddress, uint _tokensNumber) public onlyAdmin{
        
        idCardMap[_studentAddress] += _tokensNumber;    //giving n tokens to address of students
        adminTokenBalance -= _tokensNumber;             // update adminTokenBalance

    }
    
    // Return Tokens Number at address
    /* function currentBalance(address _studentAddress) public view returns(uint){
        return idCardMap[_studentAddress];
    } */

    // List of rewards
    address[] public rewardsArray;
    function addRewards(address _newRewardAddress) public{
        rewardsArray.push(_newRewardAddress);
    }

    // Current year
    uint public currentYear;
    modifier checkExpire{
        //check here
        _;
    }



    // Pay using Tokens
    //IssueTokens[] public issueTokens;
    mapping(address => uint) public vendorMap;
    address[] public transaction;

    function checkStudent(address checkAddress) public view returns(bool){    //doubt what is value of not existing address?
        if(yearMap[checkAddress] > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function pay(address _whereToPay, uint _howMuchPay) public payable{
        for(uint i=0 ; i<rewardsArray.length ; i++){
            if(_whereToPay == rewardsArray[i]){
               idCardMap[msg.sender] -= _howMuchPay;
               vendorMap[_whereToPay] += _howMuchPay;
               
            }

            else if(checkStudent(_whereToPay) == true){
                if(yearMap[_whereToPay] != yearMap[msg.sender]){
                    idCardMap[msg.sender] -= _howMuchPay;
                    idCardMap[_whereToPay] += (( 3 * _howMuchPay) / 4);
                    // transaction.push(transaction.hash);
                }
                else if(yearMap[_whereToPay] == yearMap[msg.sender]){
                    idCardMap[msg.sender] -= _howMuchPay;
                    idCardMap[_whereToPay] += _howMuchPay;
                    // transaction.push(transaction.hash);
                }
            }
        }
    }

















/*
    address[] public vp_array;
    uint256 public pay;
    uint256 public vendor_balance;

    function vp_address(address vp) public {
        vp_array.push(vp);
    }

    function receive_payment() public payable{
        
        for(uint i=0 ; i < vp_array.length ; i++){
            require(msg.sender!=vp_array[i], "Oh Sorry! Vp's cann't use tokens");     //here i have doubt that is this really revert if someone matches or only it will check for i=0 and move on..
        }

        pay=msg.value;
        vendor_balance= vendor_balance + pay;  // tokens are added in vendor's account

    }
    
    function redeem() public {
        
    }\
    */
}