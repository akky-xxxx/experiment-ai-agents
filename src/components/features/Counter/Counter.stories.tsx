import { Counter } from "./Counter"

import type { Meta, StoryObj } from "@storybook/nextjs"

const meta = {
  component: Counter,
} satisfies Meta<typeof Counter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialValue: 0,
  },
}

export const StartsAtFive: Story = {
  args: {
    initialValue: 5,
  },
}
