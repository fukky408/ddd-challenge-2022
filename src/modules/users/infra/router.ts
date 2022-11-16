import Fastify from "fastify";
import { Middleware } from "../../../shared/infra/middleware";

const fastify = Fastify({
  logger: true,
});

const middleware = new Middleware();

fastify.get(
  "/",
  {
    // do authentication
    onRequest: middleware.ensureAuthenticated(),
  },
  async (req, res) => {
    // call controller
  }
);
