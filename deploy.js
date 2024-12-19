const Web3 = require("web3");
const fs = require("fs");

const web3 = new Web3("http://eth-node:8545"); // Connect to local blockchain


async function deploy() {
    
const abi = JSON.parse(fs.readFileSync("./build/MyToken.abi", "utf8"));
const bytecode = fs.readFileSync("./build/MyToken.bin", "utf8");

    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts);

        const contract = new web3.eth.Contract(abi);
        console.log("deploying...")
        const instance = await contract
            .deploy({ data: bytecode , arguments: ["PHI PARTN", "PHIPAR", 18, 10000000000000, "0xE48995bEfED03F483116820310789CF1950d1B11", "0xE48995bEfED03F483116820310789CF1950d1B11"]})
            .send({ from: accounts[0], gas: 1500000 });

        console.log("Contract deployed at:", instance.options.address);
    } catch (error) {
        console.log("error", error);
    }

}

// setTimeout(deploy, 100000); 
deploy();