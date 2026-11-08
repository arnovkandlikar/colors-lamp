// ESLint flat config for the browser-side JavaScript in js/
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    // Third-party library (blueimp JavaScript-MD5) and tooling output are not linted
    ignores: ["js/md5.js", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        md5: "readonly",
      },
    },
    rules: {
      // Functions in code.js are called from inline onclick="" handlers in the HTML
      "no-unused-vars": ["error", { vars: "local" }],
      eqeqeq: "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-dupe-keys": "error",
      semi: "off",
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: { sourceType: "commonjs", globals: globals.node },
  },
];
