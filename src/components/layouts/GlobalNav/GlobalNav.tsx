import Link from "next/link"

import styles from "./GlobalNav.module.css"

import type { FC } from "react"

const NAV_LINKS = [
  { href: "/", label: "トップ" },
  { href: "/calendar", label: "カレンダー" },
] as const

export const GlobalNav: FC = () => {
  return (
    <nav aria-label="グローバルナビゲーション" className={styles["nav"]}>
      <ul className={styles["list"]}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link className={styles["link"]} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
