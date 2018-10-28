// @ts-check

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as NodeCouchDb from 'node-couchdb';
import { initUsers } from './init';
import { UsersController } from './controllers/users';
import { CouchDbStore, UserStore } from './store';
import { FabricAdapterBuilder } from './utils/adapter-builder';
import { LocationsController } from './controllers/locations';
import { AssetsController } from './controllers/assets';

const rootDir = path.resolve(__dirname, '..');
dotenv.config();

const channel = process.env.CHANNEL;
const userChainCode = 'participant';
const locationChainCode = 'location';
const coffeeChainCode = 'coffee';

// Users
const users = new Map([
  ['user1-id', { fabricId: 'user1', name: 'User 1' }],
  ['user2-id', { fabricId: 'user2', name: 'User 2' }],
  ['user3-id', { fabricId: 'user3', name: 'User 3' }],
]);

// CouchDB Client
const couchDb = new NodeCouchDb({
  host: process.env.COUCHDB_HOST,
  protocol: process.env.COUCHDB_PROTOCOL,
  port: parseInt(process.env.COUCHDB_PORT),
});

// User Store and Fabric Adapter Builder
const userDbName = `${channel}_${userChainCode}`;
const userStore = new UserStore(couchDb, userDbName, users);
const userFabricBuilder = new FabricAdapterBuilder(
  path.resolve(rootDir, process.env.KEYSTORE),
  path.resolve(rootDir, process.env.NETWORKPROFILE),
  channel,
  userChainCode,
);

// Location Store and Fabric Adapter Builder
const locationDbName = `${channel}_${locationChainCode}`;
const locationStore = new CouchDbStore(couchDb, locationDbName);
const locationFabricBuilder = new FabricAdapterBuilder(
  path.resolve(rootDir, process.env.KEYSTORE),
  path.resolve(rootDir, process.env.NETWORKPROFILE),
  channel,
  locationChainCode,
);

// Coffee Store and Fabric Adapter Builder
const coffeeDbName = `${channel}_${coffeeChainCode}`;
const coffeeStore = new CouchDbStore(couchDb, coffeeDbName);
const coffeeFabricBuilder = new FabricAdapterBuilder(
  path.resolve(rootDir, process.env.KEYSTORE),
  path.resolve(rootDir, process.env.NETWORKPROFILE),
  channel,
  coffeeChainCode,
);

// Controllers
const usersController = new UsersController(userStore);
const locationsController = new LocationsController(locationStore,
  locationFabricBuilder);
const coffeeController = new LocationsController(coffeeStore,
  coffeeFabricBuilder);

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: true, limit: '40mb' }));
app.use(bodyParser.json({ limit: '40mb' }));

app.use('/users', usersController.router());
app.use('/locations', locationsController.router());
app.use('/assets', coffeeController.router());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// app.use('/drug', DrugCtrl);

// Create users and start listener
const fabricUserIds = Array.from(users.values()).map(u => u.fabricId);
const port = process.env.PORT || 10100;
initUsers(userStore, fabricUserIds, process.env.ORGCERT, userFabricBuilder).
  then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  }).
  catch(err => {
    console.error(err);
  });
