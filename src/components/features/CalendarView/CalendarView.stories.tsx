import { CalendarView } from "./CalendarView"

import type { Meta, StoryObj } from "@storybook/nextjs"

const meta = {
  component: CalendarView,
} satisfies Meta<typeof CalendarView>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    today: new Date(2026, 6, 22),
  },
}

export const SpanningAdjacentMonths: Story = {
  args: {
    today: new Date(2026, 2, 15),
  },
}
