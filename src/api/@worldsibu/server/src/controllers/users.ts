import {Request, Response, Router} from 'express';
import {Controller} from './controller';
import {UserStore} from '../store';

export class UsersController extends Controller {

  private readonly store: UserStore;

  constructor(store: UserStore) {
    super();
    this.store = store;
  }

  public router(): Router {
    const router = Router();
    router.get('/', this.routerMethod(this.list));
    return router;
  }

  private async list(_req: Request, res: Response) {
    const users = await this.store.list();
    res.status(200).send(users);
  }
}
