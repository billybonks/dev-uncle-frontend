module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'ember',
  ],
  extends: [
    'airbnb',
    'plugin:ember/recommended',
  ],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'class-methods-use-this': 'off',
    'import/order': 'off',
    'prefer-rest-params': 'off',
    'lines-between-class-members': 'off', // decorators
    'no-underscore-dangle': 'off', // this._super()
    'react/sort-comp': 'off', // irelevent
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'ember/order-in-components': 0,
    'ember/named-functions-in-promises': 0,
    'ember/closure-actions': 0,
    'ember/use-ember-get-and-set': 0,
    'template-curly-spacing': 0,
    indent: 0,
    semi: 2,
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
