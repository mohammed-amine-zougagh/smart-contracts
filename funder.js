const Web3 = require("web3");

const web3 = new Web3("http://localhost:8545");

async function createAccountAndFund() {

    const newAccount = web3.eth.accounts.create();
    console.log("New account created:", newAccount);

    const accounts = await web3.eth.getAccounts();

    const preFundedAccount = accounts[0];
    const fundAmount = web3.utils.toWei('10', 'ether');
    const tx = await web3.eth.sendTransaction({
        from: preFundedAccount,
        to: newAccount.address,
        value: fundAmount,
        gas: 21000,
    });

    console.log("Transaction successful:", tx.transactionHash);

    const balance = await web3.eth.getBalance(newAccount.address);
    console.log("New account balance:", web3.utils.fromWei(balance, 'ether'), "ETH");
}

createAccountAndFund();
