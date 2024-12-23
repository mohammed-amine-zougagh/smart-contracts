# Ethereum Smart Contracts Implementation

This project demonstrates a basic Ethereum smart contract implementation using a Dockerized setup. It includes a token smart contract, deployer code, and client code to interact with the deployed contract. The project is configured to run on a development (dev) Ethereum private network, which is an isolated instance of the Ethereum blockchain.

---

## Features

- **Smart Contracts**: Solidity contracts for Ethereum (currently includes a basic token contract).
- **Automated Deployment**: Code to deploy contracts within a Dockerized environment.
- **Manual Interaction**: A client setup for interacting with deployed contracts.
- **Dockerized Setup**: Simplified environment using Docker and Docker Compose.

---

## Project Structure

```plaintext
.
├── contracts
│   └── MyToken.sol          # Solidity smart contract
├── deployers
│   └── deploy.js          # Deployment script (Node.js)
├── client
│   ├── interact.js        # Client code to interact with the contract
│   └── fund.js            # Client code to create and fund accounts 
├── Dockerfile             # Dockerfile for client container
├── docker-compose.yml     # Configuration for Ethereum node and client container
└── README.md              # Project documentation
```
## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Setup and Usage

### 1. Build and Start the Environment

1. Clone this repository:
   ```bash
   git clone https://github.com/mzougagh/smart-contracts.git
   cd smart-contracts
   ```
2. Run the private network and the client:
   ```bash
   docker-compose up --build
   ```
   This will:
   - Start an Ethereum dev node.
   - Build a client container, deploy the smart contract, and wait for further client interaction (The `deploy.js` script inside the `deployers` folder automatically deploys the contract when the client container starts, and it keeps the container running by triggers an "infinite loop").


### 3. Interact with the Contract

1. Access the client container shell:
   ```bash
   docker exec -it client sh
   ```
2. Run the interaction script manually:  
   ```bash
   node ./client/interact.js
   ```
    Make sure you replace the address in the code with the corresponding contract address that was generated during the deployment (check the client container logs).

---

## File Details

### 1. `contracts/MyToken.sol`

A basic ERC-20 token contract implemented in Solidity.

### 2. `deployers/deploy.js`

A Node.js script that:

- Connects to the Ethereum node.
- Deploys the `MyToken.sol` contract.
- Logs the deployed contract address.
- Runs an infinite loop to keep the container up.

### 3. `client/interact.js`

A Node.js script that:

- Connects to the Ethereum node.
- Interacts with the deployed contract (e.g., checks token balances, transfers tokens).

---

## Customization

- Modify `contracts/MyToken.sol` or add new sol files to implement your custom token logic.
- Update `deployers/deploy.js` to handle new contract deployments.
- Extend `client/interact.js` to include additional interactions with your contract.

---

## Cleaning Up

To stop and remove all containers:

```bash
docker-compose down
```

---