// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IssueTokens{
    // Issue new ID Card

    mapping(address => uint) public idCardMap;
    uint public adminTokenBalance;
    function issueIdCard(address _newAddress) public {
        idCardMap[_newAddress] = 0;
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
    function currentBalance(address _studentAddress) public view returns(uint){
        return idCardMap[_studentAddress];
    }

}