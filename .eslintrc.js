export default {
    env: {
        es2021: true,
        node: true,
    },
    plugins: ['jest'],
    extends: ['standard-with-typescript', 'eslint:recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
};
