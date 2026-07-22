import eslintConfigSCAll from "eslint-config-sc-all"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  ...eslintConfigSCAll.getConfigs("typescript", [
    "jest",
    "next",
    "react",
    "storybook",
  ]),
  eslintConfigPrettier,
  {
    ignores: [
      ".next/**",
      "build/**",
      "coverage/**",
      "next-env.d.ts",
      "out/**",
      "src/**/*.module.css.d.ts",
      "storybook-static/**",
      // Type-aware parsing chokes on these root-level tool configs; Prettier
      // and cspell still cover them.
      ".storybook/main.ts",
      "eslint.config.mjs",
      "stylelint.config.mjs",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    // Framework/tooling files whose export shape is dictated by Next.js,
    // Jest, Prettier, cspell, or Storybook conventions rather than our own style.
    files: [
      ".storybook/preview.tsx",
      "cspell.config.ts",
      "jest.config.ts",
      "jest.setup.ts",
      "next.config.ts",
      "prettier.config.ts",
      "src/app/**/{page,layout,loading,error,not-found,template,default,global-error}.tsx",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
]
