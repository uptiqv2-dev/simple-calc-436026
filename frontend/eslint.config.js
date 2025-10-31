import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import unUsedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
    { ignores: ['dist', 'vite.config.ts', 'vite-plugin-iframe-errors.ts'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'prettier': prettier,
            'unused-imports': unUsedImports
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'prettier/prettier': 'warn',
            '@typescript-eslint/no-implicit-any': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'react-refresh/only-export-components': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': 'off'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    }
);
