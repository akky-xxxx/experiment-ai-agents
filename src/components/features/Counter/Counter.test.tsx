import { composeStories } from "@storybook/nextjs"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import * as stories from "./Counter.stories"

const { Default, StartsAtFive } = composeStories(stories)

describe("Counter stories", () => {
  it("renders with the default initial value", async () => {
    await Default.run()
    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("renders with a custom initial value", async () => {
    await StartsAtFive.run()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("increments the count on click", async () => {
    const user = userEvent.setup()
    await Default.run()

    await user.click(screen.getByRole("button", { name: "+1" }))

    expect(screen.getByText("1")).toBeInTheDocument()
  })
})
