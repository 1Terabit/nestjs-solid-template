module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'clean-code'],
  extends: [
    
    'plugin:sonarjs/recommended',
    'plugin:clean-code/recommended',
    'plugin:prettier/recommended',
  ],
  extends: [
    
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
  },
};
