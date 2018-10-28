import {Request, Response} from 'express';

export type RequestHandler = (req: Request, res: Response) => void;

export function RouterMethod(handler: RequestHandler, self?): RequestHandler {
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
