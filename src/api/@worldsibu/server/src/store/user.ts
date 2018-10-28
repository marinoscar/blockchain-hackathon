export class UserStore {

  private readonly couchDb;
  private readonly database: string;

  constructor(couchDb, database: string) {
    this.couchDb = couchDb;
    this.database = database;
  }

  public List(): Promise<any[]> {
    const selector = {
      selector: {
        type: 'io.worldsibu.examples.participant',
      },
    };
    const self = this;
    return new Promise((resolve, reject) => {
      self.couchDb.mango(self.database, selector, {}).then((result) => {
        resolve(result.data.docs);
      }, reject);
    });
  }
}
