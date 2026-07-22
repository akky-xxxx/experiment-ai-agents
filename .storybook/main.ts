import type { StorybookConfig } from "@storybook/nextjs"

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs",
  staticDirs: ["../public"],
} satisfies StorybookConfig
