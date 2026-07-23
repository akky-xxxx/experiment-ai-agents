import { GlobalNav } from "./GlobalNav"

import type { Meta, StoryObj } from "@storybook/nextjs"

const meta = {
  component: GlobalNav,
} satisfies Meta<typeof GlobalNav>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
