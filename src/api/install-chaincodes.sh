#!/bin/bash

node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json --output ./chaincode package

#coffee chaincode
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json install ./chaincode coffee "1"
node_modules/.bin/chaincode-manager --config ./org2.chaincode.config.json install ./chaincode coffee "1"
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json instantiate coffee "1"
#participant chaincodes
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json install ./chaincode participant "1"
node_modules/.bin/chaincode-manager --config ./org2.chaincode.config.json install ./chaincode participant "1"
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json instantiate participant "1"
#drug chaincodes
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json install ./chaincode drug "1"
node_modules/.bin/chaincode-manager --config ./org2.chaincode.config.json install ./chaincode drug "1"
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json instantiate drug "1"
#location chaincode
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json install ./chaincode location "1"
node_modules/.bin/chaincode-manager --config ./org2.chaincode.config.json install ./chaincode location "1"
node_modules/.bin/chaincode-manager --config ./org1.chaincode.config.json instantiate location "1"