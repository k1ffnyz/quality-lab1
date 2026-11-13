
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Не проверяю автоматически созданные и служебные файлы
  {
    ignores: ["coverage/**", "node_modules/**"],
  },

  // Основные настройки проверки JavaScript
  {
    files: ["**/*.{js,mjs,cjs}"],

    plugins: {
      js,
    },

    extends: ["js/recommended"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]);
