import {promise} from 'selenium-webdriver';
import map = promise.map;

const userType = 'io.worldsibu.examples.participant';

export type UserMappingData = {
  fabricId: string,
  name: string,
}

export class UserStore {

  private readonly couchDb;
  private readonly database: string;
  private readonly userMapping: Map<string, UserMappingData>;

  constructor(couchDb, database: string, userMapping) {
    this.couchDb = couchDb;
    this.database = database;
    const fabricMapping = new Map();
    Array.from(userMapping.keys()).map((key) => {
      const user = userMapping.get(key);
      fabricMapping.set(user.fabricId, user.name);
    });
    this.userMapping = fabricMapping;
  }

  public List(): Promise<any[]> {
    const selector = {
      selector: {
        type: userType,
      },
    };
    const self = this;
    return new Promise((resolve, reject) => {
      self.couchDb.mango(self.database, selector, {}).then((result) => {
        const users = result.data.docs.map(user => {
          const x = Object.assign(user, {
            name: self.userMapping.get(user.user)
          });
          return x;
        });
        resolve(users);
      }, reject);
    });
  }
}
