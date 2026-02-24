import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import cssModules from "eslint-plugin-css-modules";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "build", "coverage"]),

  // app code
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "css-modules": cssModules,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,

      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],

      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,

      prettier,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // react
      "react/prop-types": "off",

      // unused
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],

      // imports
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      // css modules
      "css-modules/no-unused-class": "warn",
      "css-modules/no-undef-class": "warn",
    },
  },

  // node tooling files
  {
    files: ["*.config.{js,ts,mjs}", "eslint.config.{js,ts,mjs}", "vite.config.{js,ts,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
  },
]);