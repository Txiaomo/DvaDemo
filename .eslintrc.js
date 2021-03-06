module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'arrow-body-style': 'warn',
    'linebreak-style': 'off',
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'react/prop-types': 'off',
    'max-len': [
      2,
      {
        code: 140,
        tabWidth: 4,
        ignoreUrls: true,
      },
    ],
    'no-return-assign': 0,
    'no-plusplus': 0,
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'prefer-const': 0,
    'object-curly-newline': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'spaced-comment': 0,
    'dot-notation': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'space-before-function-paren': 0,
    'operator-linebreak': 0,
    'no-restricted-syntax': 0,
    indent: 0,
    'function-paren-newline': 0,
    'arrow-parens': 'off',
    'react/no-deprecated': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
      },
    ],
    radix: ['error', 'as-needed'],
  },
};
