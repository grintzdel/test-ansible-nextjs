import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import onlyWarn from 'eslint-plugin-only-warn'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '*.js',
    'node_modules/**',
    '*.json',
    '*.md',
    '*.css',
  ]),
  {
    plugins: {
      'only-warn': onlyWarn,
    },
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        node: true,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
  {
    files: ['*.js?(x)', '*.ts?(x)'],
    rules: {
      'react/jsx-no-literals': 'error',
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^I[A-Z].*(Interface|Gateway)$',
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
    },
  },
])

export default eslintConfig
