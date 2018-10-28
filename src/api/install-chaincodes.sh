#!/bin/bash

node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json --output ./chaincode package
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json install ./chaincode coffee "1"
node_modules/.bin/chaincode-manager --config ./org2.chaincode.config.json install ./chaincode coffee "1"
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json instantiate coffee "1"