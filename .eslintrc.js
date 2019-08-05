module.exports = {
  root: true,
  extends: [
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'eslint-plugin-flowtype',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
  ],
  rules: {
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'flowtype/space-after-type-colon': 'off',
    'require-atomic-updates': 0,
  },
};
