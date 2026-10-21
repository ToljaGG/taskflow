import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { FormLayout } from '@/shared/ui/FormLayout'

export function RegisterForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('Register form submitted' + '\n' + username + '\n' + email + '\n' + password + '\n' + confirmPassword)
  }

  return (
    <FormLayout onSubmit={handleSubmit} title="Register">
        <Input 
            label="Username" 
            id="username" 
            name="username" 
            type="text" 
            autoComplete="username" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)} 
            placeholder="Enter your username" 
            required 
        />

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

      <Input label="Confirm Password"
        id="confirm-password"
        name="confirm-password"
        type="password"
        autoComplete="current-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Confirm your password"
        required
      />

      <Button type="submit" variant="green">
        Register
      </Button>
    </FormLayout>
  )
}