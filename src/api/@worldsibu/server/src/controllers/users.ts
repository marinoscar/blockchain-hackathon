import {Request, Response, Router} from 'express';
import {UserStore} from '../store/user';

type RequestHandler = (req: Request, res: Response) => void;

function RouterMethod(handler: RequestHandler, self?): RequestHandler {
  if (self) {
    handler = handler.bind(self);
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

  private readonly store: UserStore;

  constructor(store: UserStore) {
    this.store = store;
  }

  public Router(): Router {
    const router = Router();
    router.get('/', RouterMethod(this.ListUser, this));
    return router;
  }

  private async ListUser(_: Request, res: Response) {
    const users = await this.store.List();
    res.status(200).send(users);
  }
}
