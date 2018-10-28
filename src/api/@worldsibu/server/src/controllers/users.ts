import {Request, Response, Router} from 'express';
import {RouterMethod} from './handler';
import {UserStore} from '../store/user';

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
