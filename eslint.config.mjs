// eslint.config.js

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginNext from "@next/eslint-plugin-next";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript and JSX files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
      import: pluginImport,
      next: pluginNext,
    },
    extends: ["js/recommended", "plugin:react/recommended", "plugin:import/recommended", "plugin:next/core-web-vitals"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
  },

  // TypeScript and TSX files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: pluginTypescript,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": pluginTypescript,
      react: pluginReact,
      import: pluginImport,
      next: pluginNext,
    },
    extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:import/recommended", "plugin:next/core-web-vitals"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
  },

  // React settings
  pluginReact.configs.flat.recommended,
]);
