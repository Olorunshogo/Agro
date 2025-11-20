
// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  // Next.js base config
  ...nextVitals,
  ...nextTs,

  // Your enhanced custom rules
  {
    plugins: [
      "tailwindcss",
      "prettier",
      "simple-import-sort",
      "unused-imports",
    ],

    extends: [
      "plugin:tailwindcss/recommended",
      "plugin:prettier/recommended",
    ],

    rules: {
      // Next.js rules
      "@next/next/google-font-display": "error",
      "@next/next/google-font-preconnect": "error",
      "@next/next/inline-script-id": "error",
      "@next/next/next-script-for-ga": "error",
      "@next/next/no-assign-module-variable": "error",
      "@next/next/no-async-client-component": "error",
      "@next/next/no-before-interactive-script-outside-document": "error",
      "@next/next/no-css-tags": "error",
      "@next/next/no-document-import-in-page": "error",
      "@next/next/no-duplicate-head": "error",
      "@next/next/no-head-element": "error",
      "@next/next/no-head-import-in-document": "error",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/no-page-custom-font": "error",
      "@next/next/no-script-component-in-head": "error",
      "@next/next/no-styled-jsx-in-document": "error",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-title-in-document-head": "error",
      "@next/next/no-typos": "error",
      "@next/next/no-unwanted-polyfillio": "error",

      // React rules
      "react/no-unescaped-entities": "warn",

      // Prettier integration
      "prettier/prettier": "warn",

      // Tailwind rules
      "tailwindcss/no-contradicting-classname": "warn",

      /* --- Import Sorting (simple-import-sort) --- */
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      /* --- Unused imports auto-cleanup --- */
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  /* File-specific overrides */
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript no-unused-vars replaced by unused-imports
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // Ignore files from Next.js
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
