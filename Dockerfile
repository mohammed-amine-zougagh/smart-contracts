FROM ethereum/solc:stable AS build

WORKDIR /app

COPY ./contracts ./contracts

RUN ["/usr/bin/solc", "--bin", "--abi", "./contracts/MyToken.sol", "-o", "./build"]

FROM node:23-alpine

WORKDIR /app

COPY --from=build /app/build ./build

COPY ./deploy.js .

COPY ./package.json .

RUN ["npm", "install"]

ENTRYPOINT [ "node", "./deploy.js"]