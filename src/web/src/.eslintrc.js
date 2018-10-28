module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/href-no-hash': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 0,
    'arrow-body-style': ['error', 'always'],
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { singleQuote: true }]
  },
  plugins: ['react', 'jsx-a11y', 'import']
};
