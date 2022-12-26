module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-brace-presence': 0,
    'no-undef': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'default-param-last': 0,
    'no-case-declarations': 0,
    'no-underscore-dangle': 0,
    'react/button-has-type': 0,
    'consistent-return': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-console': 0,
    'object-curly-newline': 0,
    'max-len': [2, { code: 110 }],
    'react/jsx-props-no-spreading': 0,
  },
};
