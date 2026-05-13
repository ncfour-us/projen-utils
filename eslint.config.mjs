import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/*.js",
    "**/*.d.ts",
    "**/node_modules/",
    "**/*.generated.ts",
    "**/coverage",
    "!**/.projenrc.ts",
    "!projenrc/**/*.ts",
]), {
    extends: fixupConfigRules(compat.extends("plugin:import/typescript", "plugin:prettier/recommended")),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.jest,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.dev.json",
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            node: {},

            typescript: {
                project: "./tsconfig.dev.json",
                alwaysTryTypes: true,
            },
        },
    },

    rules: {
        curly: ["error", "multi-line", "consistent"],
        "@typescript-eslint/no-require-imports": "error",

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["**/test/**", "**/build-tools/**", ".projenrc.ts", "projenrc/**/*.ts"],
            optionalDependencies: false,
            peerDependencies: true,
        }],

        "import/no-unresolved": ["error"],

        "import/order": ["warn", {
            groups: ["builtin", "external"],

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],

        "import/no-duplicates": ["error"],
        "no-shadow": ["off"],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "no-return-await": ["off"],
        "@typescript-eslint/return-await": "error",
        "dot-notation": ["error"],
        "no-bitwise": ["error"],

        "@typescript-eslint/member-ordering": ["error", {
            default: [
                "public-static-field",
                "public-static-method",
                "protected-static-field",
                "protected-static-method",
                "private-static-field",
                "private-static-method",
                "field",
                "constructor",
                "method",
            ],
        }],
    },
}, {
    files: ["**/.projenrc.ts"],

    rules: {
        "@typescript-eslint/no-require-imports": "off",
        "import/no-extraneous-dependencies": "off",
    },
}]);