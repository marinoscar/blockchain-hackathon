import {Request, Response, Router} from 'express';

export type RequestHandler = (req: Request, res: Response) => void;

export abstract class Controller {

  public abstract router(): Router;

  protected getUserId(): string {
    return 'user1';
  }

  protected routerMethod(handler: RequestHandler): RequestHandler {
    handler = handler.bind(this);
    return async (req: Request, res: Response) => {
      try {
        await handler(req, res);
      } catch (err) {
        console.error(err);
        res.status(500).send(err);
      }
    };
  }

}
