module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 2,
    'react/prop-types': 0,
    'react/no-typos': 2,
    'react/prefer-stateless-function': 2,
    'react/jsx-pascal-case': 2,
    'react/forbid-component-props': 2,
    'react/jsx-key': 2,
    'react/no-unknown-property': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/no-unused-prop-types': 0,
    'react/no-deprecated': 2,
    'react/destructuring-assignment:': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 1,
    'react/no-array-index-key': 0,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        required: {
          some: [
            'nesting',
            'id',
          ],
        },
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
