module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'mocha': true,
    'protractor': true,
    'jquery': true,
    'node': true
  },
  'globals': {
    '_': true,
    'Microsoft': true,
    'angular': true,
    'debug': true,
    'google': true
  },
  // 'extends': 'airbnb',
  'extends': 'eslint:recommended',
  'rules': {
    'no-console': 1,
    'indent': [2, 'tab', {
      'SwitchCase': 1
    }],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single'],
    'complexity': [2, 12],
    'max-statements': [2, 24],
    'max-depth': [2, 5],
    'max-len': [2, 120],
    'max-params': [2, 3],
    'max-nested-callbacks': [2, 0],
  }
};
