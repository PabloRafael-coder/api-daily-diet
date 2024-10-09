import type { FastifyInstance } from 'fastify';

export default async function routes(app: FastifyInstance) {
  app.get('/hello', async (req, reply) => {
    await reply.send('Hello world!');
  });
}
