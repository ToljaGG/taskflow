import { useState } from 'react'

import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { FormLayout } from '@/shared/ui/FormLayout'

export function RegisterForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  })

  const [submitError, setSubmitError] = useState('')

  const passwordRules = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  }
  const emailRules = {
    minLength: email.length == 0,
    valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitError('')

    const emailInvalid = !email || !emailRules.valid
    const passwordInvalid = Object.values(passwordRules).some(
      (rule) => !rule,
    )
    const confirmPasswordInvalid = password !== confirmPassword

    if (emailInvalid || passwordInvalid || confirmPasswordInvalid ) {
      setSubmitError('Please fix the errors in the form.')
      console.log('Form submission prevented due to validation errors:', {
        emailInvalid,
        passwordInvalid,
        confirmPasswordInvalid,
      })
      console.log(passwordRules)
      console.log({
  password,
  confirmPassword,
  passwordsMatch: password === confirmPassword,
})
      return
    }

    console.log('Form submitted:', { username, email, password, confirmPassword })
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
        onBlur={() => setTouched({ ...touched, email: true })} 
        placeholder="Enter your email" 
        required 
      />

      {
        touched.email &&
        (
          <>
            {emailRules.minLength && (<p>Email is required</p>)}
            {emailRules.valid && !emailRules.minLength && (<p>Invalid email address</p>)}
          </>
        )
      }

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

      <ul>
        <li>{passwordRules.minLength ? '✓' : '○'} At least 8 characters</li>
        <li>{passwordRules.uppercase ? '✓' : '○'} One uppercase letter</li>
        <li>{passwordRules.lowercase ? '✓' : '○'} One lowercase letter</li>
        <li>{passwordRules.digit ? '✓' : '○'} One number</li>
        <li>{passwordRules.special ? '✓' : '○'} One special character</li>
      </ul>

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

      {submitError && <p>{submitError}</p>}
    </FormLayout>
  )
}