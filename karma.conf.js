module.exports = function(config) {
  var webpack = require('webpack');
  var webpackConfig = require(__dirname + '/webpack.config.js');
  var preprocessors = {};

  preprocessors['src/**/*.test.js'] = ['webpack', 'sourcemap'];

  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"test"'
    }
  }));

  config.set({
    files: [
      'src/**/*.test.js'
    ],
    reporters: ['mocha'],
    frameworks: ['mocha', 'chai', 'sinon'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-sourcemap-loader'
    ],
    preprocessors: preprocessors,
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: true
  });
};
