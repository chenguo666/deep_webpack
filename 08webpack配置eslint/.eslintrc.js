module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-unused-vars": 0,
    quotes: ["warn", "double"],
    "no-console": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
