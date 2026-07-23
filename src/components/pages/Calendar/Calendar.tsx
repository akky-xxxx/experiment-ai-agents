import { CalendarView } from "@/components/features/CalendarView/CalendarView"

import styles from "./Calendar.module.css"

import type { FC } from "react"

export const Calendar: FC = () => {
  return (
    <div className={styles["page"]}>
      <h1>カレンダー</h1>
      <CalendarView />
    </div>
  )
}
