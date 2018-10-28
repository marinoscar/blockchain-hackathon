import { Request, Response, Router } from 'express';
import { Controller } from './controller';
import { CouchDbStore } from '../store';
import { FabricAdapterBuilder } from '../utils/adapter-builder';
import { CoffeeControllerClient } from '@worldsibu/cc-coffee/dist/client';
import * as uuid from 'uuid/v4';

export class AssetsController extends Controller {

  private readonly store: CouchDbStore;
  private readonly fabricBuilder: FabricAdapterBuilder;

  constructor(store: CouchDbStore, fabricBuilder: FabricAdapterBuilder) {
    super();
    this.store = store;
    this.fabricBuilder = fabricBuilder;
  }

  public router(): Router {
    const router = Router();
    router.get('/', this.routerMethod(this.list));
    router.post('/', this.routerMethod(this.create));
    router.get('/:id', this.routerMethod(this.get));
    return router;
  }

  public async create(req: Request, res: Response) {
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const locationClient = new CoffeeControllerClient(fabricAdapter);
    await locationClient.create(uuid(),
      req.body.sku,
      req.body.variety,
      req.body.category,
      req.body.description,
      req.body.value,
      req.body.createdDate
    );
    res.sendStatus(201);
  }

  private async get(req: Request, res: Response) {
    const location = await this.store.get(req.params.id);
    res.status(200).send(location);
  }

  private async list(_req: Request, res: Response) {
    const users = await this.store.list();
    res.status(200).send(users);
  }
}
