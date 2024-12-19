const Web3 = require("web3");
const fs = require("fs");

const web3 = new Web3("http://localhost:8545");

const abi = JSON.parse(fs.readFileSync("./build/TokenMintERC20Token.abi", "utf8"));
const address = "0x14f68d2C2CA33cd04CB3C9a84408a336983EA27F"; // Replace with deployed address

const contract = new web3.eth.Contract(abi, address);

async function interact() {
    const accounts = await web3.eth.getAccounts();

    // Set a value
    await contract.methods.transfer("0xE48995bEfED03F483116820310789CF1950d1B11", 200).send({ from: accounts[0] });

    // Get the value
    const valuesen = await contract.methods.balanceOf(accounts[0]).call();
    const value = await contract.methods.balanceOf("0xE48995bEfED03F483116820310789CF1950d1B11").call();
    console.log("balance of sen:", valuesen);
    console.log("balance of rec:", value);
}

interact();