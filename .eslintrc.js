/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true, // 여기서 ESLint 탐색 중단 (monorepo 필수)
  env: {
    es2022: true,
    node: true,
    browser: true,
  },

  // JS / JSX 기본 파싱
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'eslint:recommended',
    'prettier', // 반드시 마지막
  ],

  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },

  overrides: [
    {
      // TS / TSX 전용 설정
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        // TS에서는 이 규칙을 써야 정확함
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
};
