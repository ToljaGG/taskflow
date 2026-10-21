import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
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
      <Input 
        label="Email" 
        id="email" 
        name="email" 
        type="email" 
        autoComplete="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        placeholder="Enter your email" 
        required 
      />

      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter your password"
        required
      />

      <Button type="submit" variant="green">
        Log in
      </Button>
    </form>
  )
}