import Router from 'koa-router';
import compose from 'koa-compose';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import Boom from 'boom';

export default function rootRouter(schema) {
  const router = new Router();

  router.post('/graphql', graphqlKoa({ schema }));
  router.get('/graphql', graphqlKoa({ schema }));
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
  router.get('/test', (ctx, next) => {
    ctx.body = { say: 'Hello World'};
    ctx.throw(400, Boom.badRequest('Hello World'))
  });

  return compose([
    router.routes(),
    router.allowedMethods()
  ]);
};
