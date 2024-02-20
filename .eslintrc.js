module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es2022: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
