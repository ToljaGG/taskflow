import { LoginForm } from "@/features/auth/login/ui/LoginForm";
import styles from './LoginPage.module.css';

export function LoginPage() {

  return (
    <main className={styles['loginPage']}>
      <h2>Login</h2>
      <LoginForm />
    </main>
  )
}