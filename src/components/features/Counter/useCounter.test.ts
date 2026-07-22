import { act, renderHook } from "@testing-library/react"

import { useCounter } from "./useCounter"

describe("useCounter", () => {
  it("指定した初期値で初期化される", () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  it("count を増減できる", () => {
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

  it("初期値にリセットできる", () => {
    const { result } = renderHook(() => useCounter(3))

    act(() => {
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.count).toBe(3)
  })
})
