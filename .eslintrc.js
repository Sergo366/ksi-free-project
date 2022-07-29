module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  env: {
    "es6": true,
    "browser": true
  },
  rules: {
    "no-vars": "warning",
    "quotes": "single",
    "jsx-quotes": ["error", "prefer-single"],
    '@typescript-eslint/no-explicit-any': 'warning',
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
}