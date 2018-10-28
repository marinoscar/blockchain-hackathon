export class CouchDbStore {

  private readonly couchDb: any;
  private readonly database: string;

  constructor(couchDb: any, database: string) {
    this.couchDb = couchDb;
    this.database = database;
  }

  public list(): Promise<any[]> {
    const selector = {
      selector: {
        id: {$ne: 'Chaincode'},
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
