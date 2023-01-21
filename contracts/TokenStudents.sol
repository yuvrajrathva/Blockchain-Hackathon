// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenStudents {
    // Issue new ID Card
    mapping(address => uint) public idCardMap;
    mapping(address => uint) public yearMap;

    function issueIdCard(address _newAddress, uint _currentYear) public onlyAdmin{
        idCardMap[_newAddress] = 0;
        yearMap[_newAddress] = _currentYear;
    }

    // Send Tokens from Admin to Student
    address immutable admin;
    constructor (){
        admin = msg.sender;
    }
    modifier onlyAdmin{
        require(msg.sender == admin, "Sorry! only admin can issue");
        _;
    }
    function issueTokens(address _studentAddress, uint _tokensNumber) public onlyAdmin{ 
        if(checkStudent(_studentAddress) == true){
            idCardMap[_studentAddress] += _tokensNumber;    //giving n tokens to address of students
        }
    }
    
    // List of rewards
    address[] public rewardsArray;
    address public administrator;

    modifier onlyAdministrator{
        require(msg.sender == administrator, "Sorry! only administrator can modify");
        _;
    }
    function addRewards(address _newRewardAddress) public onlyAdministrator{
        rewardsArray.push(_newRewardAddress);
    }
    function removeRewards(address _removeRewardAddress) public onlyAdministrator{
        for(uint i=0; i<rewardsArray.length; i++){
            if(rewardsArray[i] == _removeRewardAddress){
                rewardsArray[i] == rewardsArray[rewardsArray.length-1];
                rewardsArray.pop();
            }
        }
    }

    // Pay using Tokens
    mapping(address => uint) public vendorMap;

    function checkStudent(address checkAddress) private view returns(bool){    //doubt what is value of not existing address?
        if(yearMap[checkAddress] > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function payToVendor(address _whereToPay, uint _howMuchPay) public payable {
        require(idCardMap[msg.sender] - _howMuchPay >= 0,"not enough tokens");
        for(uint i=0 ; i<rewardsArray.length ; i++){
            if(_whereToPay == rewardsArray[i]){
               idCardMap[msg.sender] -= _howMuchPay;
               vendorMap[_whereToPay] += _howMuchPay; 
            }
        }
    }

    function payToStudent(address _whereToPay, uint _howMuchPay) public payable{
        require(idCardMap[msg.sender] - _howMuchPay >= 0,"not enough tokens");
        if(checkStudent(_whereToPay) == true){
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

    // function to expire the tokens
   
















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