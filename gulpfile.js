var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var karmaServer = require('karma').Server;

gulp.task('default', []);

gulp.task('webpack', function(cb) {
  webpack(require('./webpack.config.js')).run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      // output options
    }));

    cb();
  });
});

gulp.task('webpack-dev-server', function() {
  var compiler = webpack(require('./webpack.config.js'));

  new WebpackDevServer(compiler, {
    historyApiFallback: {
      index: 'dist/index.html'
    }
  }).listen(8080, 'localhost', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    // Server listening
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});

gulp.task('test', function(done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
