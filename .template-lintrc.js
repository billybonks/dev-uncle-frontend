/* eslint-env node */
'use strict';

module.exports = {
  extends: 'recommended',

  rules: {
    'no-bare-strings': false,
    'no-implicit-this': true,
    'eol-last': 'always',
    'attribute-indentation': {
      'open-invocation-max-len': 110,
    },
    'inline-link-to': true,
  }
};
