import Koa from 'koa';
import middleware from './middleware';
import router from './router';
import schema from './schema';
import Router from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { serverConfig } from '../config';

const app = new Koa();

app.use(middleware());
app.use(router(schema));

app.listen(serverConfig.port,
  () => console.log(`GraphQL-server listening on port ${serverConfig.port}.`));
