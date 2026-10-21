import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import styles from './LoginForm.module.css'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('Login form submitted' + '\n' + email + '\n' + password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <div className={styles['login-form__field']}>
        <label htmlFor="email">Email</label>
        <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
            className={styles['login-form__input']}
        />
      </div>

      <div className={styles['login-form__field']}>
        <label htmlFor="password">Password</label>
        <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            className={styles['login-form__input']}
        />
      </div>

      <Button type="submit" variant="green">
        Log in
      </Button>
    </form>
  )
}