export class CouchDbStore {

  private readonly couchDb: any;
  private readonly database: string;

  constructor(couchDb: any, database: string) {
    this.couchDb = couchDb;
    this.database = database;
  }

  public get(id: string): Promise<any> {
    const self = this;
    return new Promise<any>((resolve, reject) => {
      self.couchDb.get(self.database, id).then((result) => {
        resolve(result.data);
      }, reject);
    });
  }

  public list(): Promise<any[]> {
    const selector = {
      selector: {
        id: {$ne: 'Chaincode'},
      },
    };
    const self = this;
    return new Promise<any[]>((resolve, reject) => {
      self.couchDb.mango(self.database, selector, {}).then((result) => {
        resolve(result.data.docs);
      }, reject);
    });
  }

}
