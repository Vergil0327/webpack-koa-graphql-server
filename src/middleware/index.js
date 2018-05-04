import path from 'path';
import compose from 'koa-compose';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';

export default function middleware() {
  return compose([
    logger(),
    helmet(),
    cors(),
    bodyParser(),
  ]);
};