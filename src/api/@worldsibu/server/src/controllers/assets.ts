import {Request, Response, Router} from 'express';
import {Controller} from './controller';
import {CouchDbStore} from '../store';
import {FabricAdapterBuilder} from '../utils/adapter-builder';
import {CoffeeControllerClient} from '@worldsibu/cc-coffee/dist/client';
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
    router.post('/:id/join', this.routerMethod(this.join));
    router.get('/:id', this.routerMethod(this.get));
    router.get('/:id/history', this.routerMethod(this.history));
    router.patch('/:id', this.routerMethod(this.update));
    router.post('/:id/split', this.routerMethod(this.split));
    router.post('/:id/transfer', this.routerMethod(this.transfer));
    return router;
  }

  public async create(req: Request, res: Response) {
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const coffeeClient = new CoffeeControllerClient(fabricAdapter);
    await coffeeClient.create(
        uuid(),
        req.body.sku,
        req.body.variety,
        req.body.category,
        req.body.description,
        req.body.value,
        req.body.createdDate,
    );
    res.sendStatus(201);
  }

  public async update(req: Request, res: Response) {
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const locationClient = new CoffeeControllerClient(fabricAdapter);
    await locationClient.updateQuality(
      req.params.id,
      req.body.quality,
      req.body.classification,
      req.body.modifiedDate
    );
    res.sendStatus(201);
  }

  public async transfer(req: Request, res: Response) {
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const locationClient = new CoffeeControllerClient(fabricAdapter);
    await locationClient.transfer(
      req.params.id,
      req.body.to,
      req.body.modifiedDate
    );
    res.sendStatus(201);
  }

  public async history(req: Request, res: Response) {
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const locationClient = new CoffeeControllerClient(fabricAdapter);
    const result = await locationClient.getHistory(
      req.params.id
    );
    res.status(200).send(result);
  }

  public async split(req: Request, res: Response) {
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const locationClient = new CoffeeControllerClient(fabricAdapter);
    await locationClient.split(
      req.params.id,
      req.body.splitIds,
      req.body.modifiedDate
    );
    res.sendStatus(201);
  }

  private async get(req: Request, res: Response) {
    const location = await this.store.get(req.params.id);
    res.status(200).send(location);
  }

  private async list(_req: Request, res: Response) {
    const coffeeAssets = await this.store.list();
    res.status(200).send(coffeeAssets);
  }

  private async join(req: Request, res: Response) {
    const coffeeAssets = await this.store.list();
    const destinationId = req.params.id;
    if (!coffeeAssets.find((asset) => asset.id === destinationId)) {
      return res.status(404).send('Destination asset not found');
    }
    const components = req.body.components;
    const invalidComponent = components.some((componentId) => {
      return !coffeeAssets.find((asset) => asset.id === componentId)
    });
    if (invalidComponent) {
      return res.status(404).send('Component asset not found');
    }
    const fabricAdapter = this.fabricBuilder.build(Controller.getUserId(req));
    await fabricAdapter.init();
    const coffeeClient = new CoffeeControllerClient(fabricAdapter);
    await coffeeClient.join(destinationId, req.body.components, Date.now());
    res.sendStatus(201);
  }
}
