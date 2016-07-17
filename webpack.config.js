'use strict';

module.exports = (function() {
  var path = require('path');
  var webpack = require('webpack');

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      sourceMapFilename: '[file].map'
    },
    module: {
      noParse: [
        /node_modules\/\.js/
      ],
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
    resolve: {
      modulesDirectories: [
        'node_modules'
      ]
    },
    plugins: []
  };
})();
