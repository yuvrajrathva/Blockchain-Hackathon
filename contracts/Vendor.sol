// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Vendor {

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
        
    }
}