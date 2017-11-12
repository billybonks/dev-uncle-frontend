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
    'ember/use-ember-get-and-set': 0,
    semi: 2
  }
};
