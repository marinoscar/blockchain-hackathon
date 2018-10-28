import {CouchDbStore} from './couchdb';

export type UserMappingData = {
  fabricId: string,
  name: string,
}

export class UserStore extends CouchDbStore {

  private readonly userMapping: Map<string, UserMappingData>;

  constructor(couchDb: any, database: string, userMapping) {
    super(couchDb, database);
    const fabricMapping = new Map();
    Array.from(userMapping.keys()).map((key) => {
      const user = userMapping.get(key);
      fabricMapping.set(user.fabricId, user.name);
    });
    this.userMapping = fabricMapping;
  }

  public get(id: string): Promise<any> {
    const self = this;
    return super.get(id).then((user) => {
      user.name = self.userMapping.get(user.user);
      return user;
    });
  }

  public list(): Promise<any[]> {
    const self = this;
    return super.list().then((users) => {
      return users.map(user => {
        return Object.assign(user, {
          name: self.userMapping.get(user.user),
        });
      });
    });
  }
}
