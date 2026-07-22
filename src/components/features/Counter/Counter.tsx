"use client"

import styles from "./Counter.module.css"
import { useCounter } from "./useCounter"

import type { FC } from "react"

type Props = {
  initialValue?: number
}

export const Counter: FC<Props> = (props) => {
  const { initialValue = 0 } = props
  const { count, decrement, increment, reset } = useCounter(initialValue)

  return (
    <div className={styles["counter"]}>
      <p className={styles["count"]}>{count}</p>
      <div className={styles["controls"]}>
        <button type="button" onClick={decrement}>
          -1
        </button>
        <button type="button" onClick={reset}>
          reset
        </button>
        <button type="button" onClick={increment}>
          +1
        </button>
      </div>
    </div>
  )
}
