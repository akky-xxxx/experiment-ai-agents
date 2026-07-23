"use client"

import { useCallback, useMemo, useState } from "react"

type CalendarDay = {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
}

const addDays = (date: Date, amount: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)

const isSameDate = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const getMondayStartOffset = (date: Date): number => (date.getDay() + 6) % 7

const buildCalendarDays = (viewDate: Date, today: Date): CalendarDay[] => {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const lastOfMonth = new Date(year, month + 1, 0)

  const leadingDays = getMondayStartOffset(firstOfMonth)
  const trailingDays = 6 - getMondayStartOffset(lastOfMonth)
  const gridStart = addDays(firstOfMonth, -leadingDays)
  const dayCount = leadingDays + lastOfMonth.getDate() + trailingDays

  return Array.from({ length: dayCount }, (_, index) => {
    const date = addDays(gridStart, index)
    return {
      date,
      isCurrentMonth: date.getMonth() === month,
      isToday: isSameDate(date, today),
    }
  })
}

export const useCalendarView = (today = new Date()) => {
  const [viewDate, setViewDate] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  )

  const goToPreviousMonth = useCallback(() => {
    setViewDate(
      (current) => new Date(current.getFullYear(), current.getMonth() - 1, 1),
    )
  }, [])
  const goToNextMonth = useCallback(() => {
    setViewDate(
      (current) => new Date(current.getFullYear(), current.getMonth() + 1, 1),
    )
  }, [])

  const days = useMemo(
    () => buildCalendarDays(viewDate, today),
    [viewDate, today],
  )
  const monthLabel = `${viewDate.getFullYear().toString()}年${(viewDate.getMonth() + 1).toString()}月`

  return { days, goToNextMonth, goToPreviousMonth, monthLabel }
}
