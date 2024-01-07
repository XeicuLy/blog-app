import js from '@eslint/js';
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const config = [
  { ignores: ['dist'] },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsEsLintPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    languageOptions: {
      parser: tsEsLintParser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      ...tsEsLintPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsEsLintPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];

export default config;
