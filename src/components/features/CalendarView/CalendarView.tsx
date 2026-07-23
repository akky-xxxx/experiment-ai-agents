"use client"

import styles from "./CalendarView.module.css"
import { useCalendarView } from "./useCalendarView"

import type { FC } from "react"

const WEEKDAY_LABELS = ["月", "火", "水", "木", "金", "土", "日"] as const

type Props = {
  today?: Date
}

export const CalendarView: FC<Props> = (props) => {
  const { today } = props
  const { days, goToNextMonth, goToPreviousMonth, monthLabel } =
    useCalendarView(today)

  return (
    <div className={styles["calendar"]}>
      <div className={styles["header"]}>
        <button aria-label="前月" type="button" onClick={goToPreviousMonth}>
          ‹
        </button>
        <h2 className={styles["month-label"]}>{monthLabel}</h2>
        <button aria-label="次月" type="button" onClick={goToNextMonth}>
          ›
        </button>
      </div>
      <div className={styles["weekdays"]}>
        {WEEKDAY_LABELS.map((label) => (
          <span key={label} className={styles["weekday"]}>
            {label}
          </span>
        ))}
      </div>
      <div className={styles["days"]}>
        {days.map((day) => (
          <div
            key={day.date.toISOString()}
            className={`${styles["day"]}${day.isCurrentMonth ? "" : ` ${styles["outside-month"]}`}`}
          >
            <span
              aria-current={day.isToday ? "date" : undefined}
              className={styles["date-number"]}
            >
              {day.date.getDate()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
