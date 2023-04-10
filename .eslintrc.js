module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  ignorePatterns: ['*.cy.tsx', 'build/**', 'cypress/**', 'dist/*.js', 'public/**', 'server/index.js', '**/vendor/*.js'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
