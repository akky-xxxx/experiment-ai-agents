import { composeStories } from "@storybook/nextjs"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import * as stories from "./CalendarView.stories"

const { Default, SpanningAdjacentMonths } = composeStories(stories)

describe("CalendarView stories", () => {
  it("指定した日付を基準に当月が表示される", async () => {
    await Default.run()
    expect(screen.getByText("2026年7月")).toBeInTheDocument()
  })

  it("今日の日付には目印がつく", async () => {
    await Default.run()
    expect(screen.getByText("22")).toHaveAttribute("aria-current", "date")
  })

  it("次月ボタンをクリックすると翌月に切り替わる", async () => {
    const user = userEvent.setup()
    await Default.run()

    await user.click(screen.getByRole("button", { name: "次月" }))

    expect(screen.getByText("2026年8月")).toBeInTheDocument()
  })

  it("前月ボタンをクリックすると前月に切り替わる", async () => {
    const user = userEvent.setup()
    await Default.run()

    await user.click(screen.getByRole("button", { name: "前月" }))

    expect(screen.getByText("2026年6月")).toBeInTheDocument()
  })

  it("前月・翌月にまたがる週は両方の月の日付が表示される", async () => {
    await SpanningAdjacentMonths.run()
    expect(screen.getAllByText("1")).toHaveLength(2)
  })
})
