module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'plugin:ember/recommended',
    'eslint:recommended',
  ],
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  rules: {
    'ember/order-in-components': 0,
    'ember/named-functions-in-promises': 0,
    'ember/closure-actions': 0,
    'ember/use-ember-get-and-set': 0,
    semi: 2
  }
};
