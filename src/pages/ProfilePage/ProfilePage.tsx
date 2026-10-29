import { useSelector } from "react-redux"
import type { RootState } from "@/app/store"

import styles from "./ProfilePage.module.css"

export function ProfilePage() {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser)

  return (
    <main className={styles["profile"]}>
      <h2>Profile</h2>
      <p>{currentUser?.username}</p>
    </main>
  )
}
