import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"], // Show a warning instead of an error
      "@typescript-eslint/no-explicit-any": ["warn"], // Allow 'any' with a warning
      "prefer-const": "error", // Enforce 'const' usage when variables aren't reassigned
      "no-var": "error", // Disallow 'var' declarations
      "react-hooks/rules-of-hooks": "error", // Ensure proper hook usage
      "react-hooks/exhaustive-deps": "warn", // Warn for missing dependencies in useEffect
      "prefer-const": "off",      // Disables the "prefer-const" rule
      "no-var": "off"
    },
  },
];

export default eslintConfig;
