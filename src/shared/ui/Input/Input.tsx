import type { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles["field"]}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input className={styles["input"]} {...props} />
    </div>
  )
}
