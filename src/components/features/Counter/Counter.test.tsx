import { composeStories } from "@storybook/nextjs"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import * as stories from "./Counter.stories"

const { Default, StartsAtFive } = composeStories(stories)

describe("Counter stories", () => {
  it("デフォルトの初期値で表示される", async () => {
    await Default.run()
    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("指定した初期値で表示される", async () => {
    await StartsAtFive.run()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("クリックでcountが増加する", async () => {
    const user = userEvent.setup()
    await Default.run()

    await user.click(screen.getByRole("button", { name: "+1" }))

    expect(screen.getByText("1")).toBeInTheDocument()
  })
})
