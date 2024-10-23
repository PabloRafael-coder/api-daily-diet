import { FastifyInstance } from 'fastify';
import { knex } from './database';

export default async function routes(app: FastifyInstance) {
  app.post('/user', async (req, reply) => {
    const user = await knex('users').insert({
      id: new Date().getTime(),
      name: 'pablo',
    });
    reply.send({ message: 'user created' });
  });

  app.get('/user', async (req, reply) => {
    const user = await knex('users').select().table('users');

    reply.send(user);

    return user;
  });
}
