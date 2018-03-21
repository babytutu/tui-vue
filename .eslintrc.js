module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': [0],
    'func-names': [0],
    'no-debugger': [1],
    'no-alert': [1],
    'no-console': [1],
    'no-new': [0],
    'no-plusplus': [0],
    'no-underscore-dangle': [0],
    'no-param-reassign': [0],
    'no-unused-expressions': [0],
    'no-bitwise': [0],
    'prefer-destructuring': [0],
    'semi': [2, 'never'],
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'import/no-dynamic-require': [0],
    'import/imports-first': [0],
    'import/newline-after-import': [1],
    'import/extensions': [0],
  },
}