import Fastify from "fastify";
import { Middleware } from "./shared/infra/middleware";

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

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
