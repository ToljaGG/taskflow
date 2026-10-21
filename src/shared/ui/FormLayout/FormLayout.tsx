import type { ComponentPropsWithoutRef } from 'react'
import styles from './FormLayout.module.css'

export function FormLayout({ 
    children, 
    ...props }: ComponentPropsWithoutRef<'form'>) {
  return (
    <form className={styles['form']} {...props}>
      {children}
    </form>
  )
}