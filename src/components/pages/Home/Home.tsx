import { Counter } from "@/components/features/Counter/Counter"

import styles from "./Home.module.css"

import type { FC } from "react"

export const Home: FC = () => {
  return (
    <div className={styles["page"]}>
      <h1>experiment-ai-agents</h1>
      <Counter />
    </div>
  )
}
