const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const StartServerPlugin = require('start-server-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  name : 'server:dev',
  watch: true,
  entry: [
    'webpack/hot/poll?1000',
    path.resolve(path.join(__dirname, '../src/index'))
  ],
  output: { path: path.join(__dirname, '..', 'dist'), filename: 'server.dev.js' },
  plugins: [
    new StartServerPlugin('server.dev.js'),
    new webpack.HotModuleReplacementPlugin()
  ]
});
