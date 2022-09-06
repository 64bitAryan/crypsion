import React, {useEffect, useState} from "react";
import { ethers } from "ethers";
import { marketplaceContractAbi, marketplaceContractAddress } from "../const";

export const MarketplaceContext = React.createContext();

const { ethereum } = window;

// fetch our ethereum contract
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const marketplaceContract = new ethers.Contract(marketplaceContractAddress, marketplaceContractAbi, signer); 
    console.log({
        provider,
        signer,
        marketplaceContract,
    });
}

export const MarketplaceProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState("")

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Plese install metamask");

            const accounts = await ethereum.request({method: 'eth_accounts'});
    
            if(accounts.length) {
                setCurrentAccount(accounts[0])
            } else {
                console.log("No account found")
            }
        } catch(err) {
            console.log(err);
        }
    }

    const connectWallet = async() => {
        try{
            if(!ethereum) return alert("Plese install metamask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch(err) {
            console.log(err);
            throw new Error("No ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <MarketplaceContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </MarketplaceContext.Provider>
    );
}