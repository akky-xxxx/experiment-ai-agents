import { act, renderHook } from "@testing-library/react"

import { useCounter } from "./useCounter"

describe("useCounter", () => {
  it("initializes with the given value", () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  it("increments and decrements the count", () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(0)
  })

  it("resets to the initial value", () => {
    const { result } = renderHook(() => useCounter(3))

    act(() => {
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.count).toBe(3)
  })
})
