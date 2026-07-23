import { composeStories } from "@storybook/nextjs"
import { screen } from "@testing-library/react"

import * as stories from "./GlobalNav.stories"

const { Default } = composeStories(stories)

describe("GlobalNav stories", () => {
  it("トップへのリンクが表示される", async () => {
    await Default.run()
    expect(screen.getByRole("link", { name: "トップ" })).toHaveAttribute(
      "href",
      "/",
    )
  })

  it("カレンダーへのリンクが表示される", async () => {
    await Default.run()
    expect(screen.getByRole("link", { name: "カレンダー" })).toHaveAttribute(
      "href",
      "/calendar",
    )
  })
})
