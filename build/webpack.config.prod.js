const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const StartServerPlugin = require('start-server-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  name : 'server:prod',
  entry: path.resolve(path.join(__dirname, '../src/index')),
  output: { path: path.join(__dirname, '..', 'dist'), filename: 'server.prod.js' },
  plugins: [
    new StartServerPlugin('server.prod.js')
  ]
});
