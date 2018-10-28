import {Request, Response, Router} from 'express';

type RequestHandler = (req: Request, res: Response) => void;

function RouterMethod(handler: RequestHandler, self?): RequestHandler {
  if (self) {
    handler = handler.apply(self);
  }
  return async (req: Request, res: Response) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };
}

export class UsersController {

  private readonly couchDb;
  private readonly database: string;

  constructor(couchDb, database: string) {
    this.couchDb = couchDb;
    this.database = database;
  }

  public Router(): Router {
    const router = Router();
    router.get('/users', RouterMethod(this.ListUser, this));
    return router;
  }

  private async ListUser(req: Request, res: Response) {
    const selector = {
      selector: {
        type: 'io.worldsibu.examples.participant',
      },
    };
    this.couchDb.mango(this.database, selector, {}).then(
        (users) => {
          res.status(200).send(users);
        },
        (err) => {
          console.error(err);
          res.status(500).send(err);
        },
    );
  }

}
