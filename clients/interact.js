const Web3 = require("web3");
const fs = require("fs");

const web3 = new Web3("http://eth-node:8545");

const abi = JSON.parse(fs.readFileSync("./build/MyToken.abi", "utf8"));
const address = "0x97CF535bDC1d176AC54Fe73535Bf3df2639f554f"; // Replace with deployed address

const contract = new web3.eth.Contract(abi, address);

async function interact() {
    const accounts = await web3.eth.getAccounts();

    // Set a value
    await contract.methods.transfer("0x99c766ED6E6d37Ca338A3a9ED713F9acD5CA7b42", 200).send({ from: accounts[0] });

    // Get the value
    const valuesen = await contract.methods.balanceOf(accounts[0]).call();
    const value = await contract.methods.balanceOf("0x99c766ED6E6d37Ca338A3a9ED713F9acD5CA7b42").call();
    console.log("balance of sen:", valuesen);
    console.log("balance of rec:", value);
}

interact();