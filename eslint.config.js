import astroEslintParser from 'astro-eslint-parser';
import typescriptEslintParser from '@typescript-eslint/parser';
import { configs as astroConfigs } from 'eslint-plugin-astro';

export default [
  {
    ignores: ['node_modules/'],
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      astro: 'eslint-plugin-astro',
    },
    rules: {
      ...astroConfigs.recommended.rules,
    },
  },
];