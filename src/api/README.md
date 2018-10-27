# Run the project

Install dependencies:
```bash
npm i
```

Build the chaincode (running `npm i` already did this for you):
```bash
lerna run build --scope @worldsibu/convector-example-dsc-cc-drug
lerna run build --scope @worldsibu/convector-example-dsc-cc-participant
```

Wake up the environment and install the components.

```bash
# Start the development blockchain and install chaincodes
npm run restart
```

Run the project

```bash
# Start the server
lerna run start:dev --scope @worldsibu/convector-example-dsc-server --stream
# Start the ui project
lerna run start --scope @worldsibu/convector-example-dsc-ui --stream
```

Go to `localhost:4200` and use the application!

Since the "user" running the server is a blockchain identity coming from a certificate, to make it easy to switch between users you can use the scripts:

# Multiple users (transfer and other functions)

To have multiple users registered in the network you need to start the server per each user that will be
available with these example scripts 👇

```
# Start the server as the first user of the org 1
lerna run start:org1:user1 --scope @worldsibu/convector-example-dsc-server --stream
# Start the server as the second user of the org 1
lerna run start:org1:user2 --scope @worldsibu/convector-example-dsc-server --stream
# Start the server as the third user of the org 1
lerna run start:org1:user3 --scope @worldsibu/convector-example-dsc-server --stream
# Start the server as the first user of the org 2
lerna run start:org2:user1 --scope @worldsibu/convector-example-dsc-server --stream
# Start the server as the second user of the org 2
lerna run start:org2:user2 --scope @worldsibu/convector-example-dsc-server --stream
# Start the server as the third user of the org 2
lerna run start:org2:user3 --scope @worldsibu/convector-example-dsc-server --stream
```

