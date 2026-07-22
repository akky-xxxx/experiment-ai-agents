"use client"

import { useCallback, useState } from "react"

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount((current) => current + 1)
  }, [])
  const decrement = useCallback(() => {
    setCount((current) => current - 1)
  }, [])
  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])

  return { count, decrement, increment, reset }
}
