const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");
const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("NFTMarketplace", () => {
    let deployer, add1, add2, nft, marketplace;
    let feePercent = 1 
    let URI = "Sample URI";
    beforeEach(async () => {
        const NFT = await hre.ethers.getContractFactory("NFT");
        const Marketplace = await hre.ethers.getContractFactory("Marketplace");
        
        [deployer, add1, add2] = await hre.ethers.getSigners();

        nft = await NFT.deploy();
        marketplace = await Marketplace.deploy(feePercent);
    
    });

    describe("Deployment", () => {
        it("Should track name and symbol of the nft collection", async () => {
            expect(await nft.name()).to.equal("testNft");
            expect(await nft.symbol()).to.equal("test");
        })
        it("Should track feeAccount and feePercentage of the marketplace", async() => {
            expect(await marketplace.feePercent()).to.equal(feePercent);
            expect(await marketplace.feeAccount()).to.equal(deployer.address);
        })
    })

    describe("Minting NFT's", () => {
        it("Should tract each minted NFT", async () => {
            // ".connect(address)" function is used to use the specific address as caller i.e msg.sender for that transaction is that address
            await nft.connect(add1).mint(URI)
            expect(await nft.tokenCount()).to.equal(1);
            expect(await nft.balanceOf(add1.address)).to.equal(1);
            expect(await nft.tokenURI(1)).to.equal(URI);

            await nft.connect(add2).mint(URI)
            expect(await nft.tokenCount()).to.equal(2);
            expect(await nft.balanceOf(add1.address)).to.equal(1);
            expect(await nft.tokenURI(1)).to.equal(URI);
        })
    })

    describe("Making marketplace items", () => {
        beforeEach(async () => {
            // addr1 mint the NFT
            await nft.connect(add1).mint(URI)

            // add1 approve marketplace to spend nft
            await nft.connect(add1).setApprovalForAll(marketplace.address, true)
        });

        it("Should be tracking newly created itens, transfer NFT from seller to marketplace and emit Offered event", async () => {
            // add1 offers their nft at a price of 1 eth
            // 1 eth = 10^18 wei
            await expect(marketplace.connect(add1).makeItem(nft.address, 1, toWei(1)))
                .to.emit(marketplace, "Offered")
                .withArgs(
                    1, 
                    nft.address,
                    1,
                    toWei(1),
                    add1.address
                )
            // Owner of NFT should now be the marketplace
            expect(await nft.ownerOf(1)).to.equal(marketplace.address)

            // Item count should now equal 1
            expect(await marketplace.itemCount()).to.equal(1)

            // Get item from the items mapping then check fields to ensure they are correct
            const item = await marketplace.items(1)
            expect(item.itemId).to.equal(1)
            expect(item.nft).to.equal(nft.address)
            expect(item.tokenId).to.equal(1)
            expect(item.price).to.equal(toWei(1))
            expect(item.sold).to.equal(false)
        });

        // it("Should fail of the price is set to zero", async () => {
        //     await expect(
        //         marketplace.connect(add1).makeItem(nft.address, 1, toWei(0))
        //     ).to.be.revertedWith("Price must be greter then zero");
        // })
    });

    describe("Purchase marketplace items", () => {
        beforeEach(async () => {
            // addr1 mint an nft
            await nft.connect(add1).mint(URI)
            // addr1 approve marketplace to spend nft
            await nft.connect(add1).setApprovalForAll(marketplace.address, true)
            // add1 makes their nft a marketplace item
            await marketplace.connect(add1).makeItem(nft.address, 1, toWei(1))
        })
        it("should update item as sold, pay seller, transfer NFT to buyer, charge fees and emit a Bought event", async () => {
            const sellerInitilEthBalance = await add1.getBalance();
            const feeAccountInitilEthBalance = await deployer.getBalance();
            //fetch item total price (market fees = item price)
            const totalPriceInWei = await marketplace.getTotalPrice(1);
        })
    })
    
});