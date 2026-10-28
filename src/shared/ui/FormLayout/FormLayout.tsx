import type { ComponentPropsWithoutRef } from "react"
import styles from "./FormLayout.module.css"

interface FormLayoutProps extends ComponentPropsWithoutRef<"form"> {
  title?: string
}

export function FormLayout({ children, title, ...props }: FormLayoutProps) {
  return (
    <div className={styles["formLayout"]}>
      <h2>{title}</h2>
      <form className={styles["form"]} {...props}>
        {children}
      </form>
    </div>
  )
}
