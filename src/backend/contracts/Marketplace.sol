// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {

    // Variables
    address payable public immutable feeAccount;
    uint256 public immutable feePercent;
    uint256 public itemCount;

    // Structs
    struct Item {
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        address payable seller;
        bool sold;
    }


    // Events
    event Offered(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller
    );

    event Bought(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller,
        address indexed buyer
    );


    // Mappings
    mapping(uint => Item) public items;


    // Constructor
    constructor(uint256 _feePercent) {
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    }


    // Functions
    function makeItem(IERC721 _nft, uint _tokenId, uint _price) public nonReentrant {
        require(_price > 0, "Price must be greter then zero"); // require _price > 0 then only proceide
        itemCount++;
        // in order to access transferFrom function fist the owner have to approve
        _nft.transferFrom(msg.sender, address(this), _tokenId); // NFT Transfer from msg.sender to the marketplace contract address
        items[itemCount] = Item (itemCount, _nft, _tokenId, _price, payable(msg.sender), false);// adding item in the items mapping
        emit Offered(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender
        ); // Emitting event to get the log after functio was called
    }

    function purchaseItems(uint _itemId) external payable nonReentrant {
        uint _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];

        // Require statements
        require(_itemId > 0 && _itemId == itemCount, "itemCount dosen't exist");
        require(msg.value >= _totalPrice, "not enough ether to cover item and market fee");
        require(!item.sold, "item already sold");

        // Paying seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        
        // item sold became true
        item.sold = true;

        // transfer net to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);
        emit Bought(
            _itemId, 
            address(item.nft), 
            item.tokenId, 
            item.price, 
            item.seller, 
            msg.sender
        );
    }

    function getTotalPrice(uint _itemId) view public returns(uint) {
        return(items[_itemId].price * (100 + feePercent)/100);
    }
    // 1:13:13
}