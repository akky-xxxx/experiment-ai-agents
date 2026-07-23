import { act, renderHook } from "@testing-library/react"

import { useCalendarView } from "./useCalendarView"

describe("useCalendarView", () => {
  it("指定した today を基準に当月が表示される", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2026, 6, 22)))
    expect(result.current.monthLabel).toBe("2026年7月")
  })

  it("次月ボタンで表示月が1つ進む(年またぎも正しく処理される)", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2025, 11, 15)))

    act(() => {
      result.current.goToNextMonth()
    })

    expect(result.current.monthLabel).toBe("2026年1月")
  })

  it("前月ボタンで表示月が1つ戻る(年またぎも正しく処理される)", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2026, 0, 15)))

    act(() => {
      result.current.goToPreviousMonth()
    })

    expect(result.current.monthLabel).toBe("2025年12月")
  })

  it("月初が月曜日でない場合、前月の日付で補完される", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2026, 6, 22)))

    const firstDay = result.current.days[0]
    expect(firstDay).toStrictEqual(
      expect.objectContaining({
        date: new Date(2026, 5, 29),
        isCurrentMonth: false,
      }),
    )
  })

  it("月末が日曜日でない場合、翌月の日付で補完される", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2026, 6, 22)))

    const lastDay = result.current.days.at(-1)
    expect(lastDay).toStrictEqual(
      expect.objectContaining({
        date: new Date(2026, 7, 2),
        isCurrentMonth: false,
      }),
    )
  })

  it("表示される日数は必ず7の倍数になる", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2026, 6, 22)))
    expect(result.current.days.length % 7).toBe(0)
  })

  it("today と一致する日付だけ isToday が true になる", () => {
    const { result } = renderHook(() => useCalendarView(new Date(2026, 6, 22)))

    const todayDays = result.current.days.filter((day) => day.isToday)
    expect(todayDays).toHaveLength(1)
    expect(todayDays[0]?.date).toStrictEqual(new Date(2026, 6, 22))
  })
})
