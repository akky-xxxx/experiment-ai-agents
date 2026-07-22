/**
 * @jest-config-loader-options {"transpileOnly": true}
 */

import { getPackageAliases } from "@storybook/nextjs/export-mocks"
// eslint-disable-next-line import/extensions -- next/jest is only resolvable via its explicit .js entry file
import nextJest from "next/jest.js"

import type { Config } from "jest"

const createJestConfig = nextJest({
  dir: "./",
})

const baseConfig: Config = {
  coverageProvider: "v8",
  moduleNameMapper: {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- regex key, not an identifier
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}

const storybookNextAliases = getPackageAliases()

async function getJestConfig() {
  const jsdomProject = await createJestConfig({
    ...baseConfig,
    displayName: "jsdom",
    moduleNameMapper: {
      ...baseConfig.moduleNameMapper,
      ...storybookNextAliases,
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/src/app/api/",
    ],
  })()

  const nodeProject = await createJestConfig({
    ...baseConfig,
    displayName: "node",
    testEnvironment: "node",
    testMatch: ["<rootDir>/src/app/api/**/*.test.ts"],
  })()

  return {
    projects: [jsdomProject, nodeProject],
  }
}

export default getJestConfig
