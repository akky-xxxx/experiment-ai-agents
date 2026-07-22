import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // @storybook/nextjs ships ESM-only; transpiling it lets next/jest's SWC
  // transform process it when tests import portable stories.
  transpilePackages: ["@storybook/nextjs", "@storybook/react", "storybook"],
}

export default nextConfig
