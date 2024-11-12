import React, {useEffect, useState} from 'react';
import {ethers} from "ethers";
//console.log(ethers);

import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

export const createEthereumContract = async () =>{
    const {ethereum} = window;
   // console.log(typeof window.ethereum);
    if (!ethereum) {
        throw new Error("No ethereum object.");
        return null;
      }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress,contractABI, signer);

    return transactionsContract;
}

export const TransactionProvider = ({children})=>{
    const [formData, setformData] = useState({addressTo:'', amount:'', keyword:'',message:''});
    const [currentAccount, setCurrentAccount] =useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) =>{
        setformData((prevState)=>({...prevState, [name]:e.target.value}));
    };

    const getAllTransactions = async () => {
        try {
          if (ethereum) {
            const transactionsContract = await createEthereumContract();
            if (!transactionsContract) return;
    
            console.log(transactionsContract.getFunction('getAllTransactions'));
            const availableTransactions = await transactionsContract.getFunction('getAllTransactions').call();
            
    
            const structuredTransactions = availableTransactions.map((transaction) => ({
              addressTo: transaction.receiver,
              addressFrom: transaction.sender,
              timestamp: new Date(ethers.toNumber(transaction.timestamp) * 1000).toLocaleString(),
              message: transaction.message,
              keyword: transaction.keyword,
              amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }));
    
            console.log(structuredTransactions);
    
            setTransactions(structuredTransactions);
          } else {
            console.log("Ethereum is not present");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    const checkIfWalletIsConnect = async ()=>{
        try{
            const { ethereum } = window;
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method:'eth_accounts'});
    
            if(accounts.length){
                setCurrentAccount(accounts[0]);
                getAllTransactions();
            }else{
                console.log("No accounts found");
            }
    
            console.log(accounts);
        }
        catch(err){
            console.log(err);
        }
    }
    const checkIfTransactionsExists = async () => {
        try {
            if (window.ethereum) {
              const transactionsContract = await createEthereumContract();
              const currentTransactionCount = await transactionsContract.getFunction('getTransactionCount').call(); // Assuming the contract has a getTransactionCount() method
              window.localStorage.setItem("transactionCount", currentTransactionCount);
            }
          } catch (error) {
            console.error("Failed to check transaction count:", error);
          }
      };

    const connectWallet = async ()=>{
        try{
            const { ethereum } = window;
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method:'eth_requestAccounts',});
            setCurrentAccount(accounts[0]);
            window.location.reload();
        }catch(err){
            console.log(err);
            throw new Error("No ethereum object.")
        }
    }

    const sendTransaction = async ()=>{
        try{
            const { ethereum } = window;
            if(ethereum){
                const {addressTo, amount, keyword, message}= formData;
                const transactionsContract=await createEthereumContract();
                console.log(ethers);
                const parsedAmount = ethers.parseEther(amount);
                console.log(parsedAmount);

                await ethereum.request({
                    method:'eth_sendTransaction',
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex,
                      }],
                });
                const transactionHash = await transactionsContract.getFunction('addToBlockchain').call(this, addressTo, parsedAmount, message, keyword);

                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log(`Success - ${transactionHash.hash}`);
                setIsLoading(false);
    
                const transactionsCount = await transactionsContract.getFunction('getTransactionCount').call();;
                setTransactionCount(ethers.toNumber(transactionsCount));
                window.location.reload();
            }else {
                console.log("No ethereum object");
              }
        } 
        catch(err){
            console.log(err);
            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnect();
        checkIfTransactionsExists();
      }, [transactionCount]);

    return(
        <TransactionContext.Provider value={{transactionCount,
            connectWallet,
            transactions,
            currentAccount,
            isLoading,
            sendTransaction,
            handleChange,
            formData,}}>
            {children}
        </TransactionContext.Provider>
    )
}