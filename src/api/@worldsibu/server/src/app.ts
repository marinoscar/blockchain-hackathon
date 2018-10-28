// @ts-check

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as NodeCouchDb from 'node-couchdb';
import {initUsers} from './init';
import {DrugCtrl} from './controllers';
import {UsersController} from './controllers/users';
import {UserStore} from './store/user';

dotenv.config();

const app: express.Application = express();

const couchDb = new NodeCouchDb({
  host: process.env.COUCHDB_HOST,
  protocol: process.env.COUCHDB_PROTOCOL,
  port: parseInt(process.env.COUCHDB_PORT),
});

const userStore = new UserStore(couchDb, process.env.COUCHDBVIEW);

const usersController = new UsersController(userStore);

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '40mb',
}));

app.use(bodyParser.json({limit: '40mb'}));

app.use('/users', usersController.Router());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/drug', DrugCtrl);

// Create users and start listener
const users = new Map([
  ['user1-id', 'user1'],
  ['user2-id', 'user2'],
  ['user3-id', 'user3'],
]);

const rootDir = path.resolve(__dirname, '..');

initUsers(
    userStore,
    Array.from(users.values()),
    process.env.ORGCERT,
    path.resolve(rootDir, process.env.KEYSTORE),
    path.resolve(rootDir, process.env.NETWORKPROFILE),
    process.env.CHANNEL,
    process.env.CHAINCODE,
).then(() => {
  const port = process.env.PORT || 10100;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}).catch(err => {
  console.error(err);
});
