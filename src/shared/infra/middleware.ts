import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

export class Middleware {
  public ensureAuthenticated() {
    return async (
      _req: FastifyRequest,
      _res: FastifyReply,
      next: HookHandlerDoneFunction
    ) => {
      // do something
      next();
    };
  }
}
