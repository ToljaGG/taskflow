import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "@/features/auth/model/auth.ts"
import { clearCurrentUser } from "@/features/auth/model/authSlice.ts"
import type { RootState, AppDispatch } from "@/app/store"

import { Button } from "@/shared/ui/Button"

import styles from "./Header.module.css"

export function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser,
  )

  function handleLogout() {
    logoutUser()
    dispatch(clearCurrentUser())
    navigate("/")
  }

  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles["link"]}>
          TaskFlow
        </Link>
      </h1>
      <div className={styles.buttons}>
        {currentUser ? 
          (
            <>
              <Button onClick={() => navigate("/profile")}>Profile</Button>
              <Button onClick={handleLogout}>Log out</Button>
            </>
          ) 
          : 
          (
            <>
              <Button onClick={() => navigate("/login")}>Login</Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </>
          )
        }
      </div>
    </header>
  )
}
