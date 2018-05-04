import Koa from 'koa';
import middleware from './middleware';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

app.use(middleware())

export default app;
