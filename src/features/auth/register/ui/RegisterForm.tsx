import { useState } from "react"

import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { FormLayout } from "@/shared/ui/FormLayout"

import styles from "./RegisterForm.module.css"

export function RegisterForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const [submitError, setSubmitError] = useState("")

  const usernameRules = {
    empty: username.length == 0
  }
  const emailRules = {
    empty: email.length == 0,
    valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  const passwordRules = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
    latinOnly: /^[A-Za-z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]+$/.test(password),
    noSpaces: !/\s/.test(password),
  }
  const confirmPasswordRules = {
    empty: confirmPassword.length == 0,
    confirm: password == confirmPassword
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitError("")

    const emailInvalid = emailRules.empty || !emailRules.valid
    const passwordInvalid = Object.values(passwordRules).some((rule) => !rule)
    const confirmPasswordInvalid = password !== confirmPassword

    if (emailInvalid || passwordInvalid || confirmPasswordInvalid) {
      setSubmitError("Please fix the errors in the form.")
      console.log("Form submission prevented due to validation errors:", {
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
      console.log("Email validation:", emailRules)
      return
    }

    console.log("Form submitted:", {
      username,
      email,
      password,
      confirmPassword,
    })
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
        onBlur={() => setTouched({ ...touched, username: true })}
        placeholder="Enter your username"
        required
      />

      {touched.username && usernameRules.empty && (
        <p className={styles['error']}>Username is required</p>
      )}

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

      {touched.email && (
        <>
          {emailRules.empty && 
            <p className={styles['error']}>Email is required</p>
          }

          {!emailRules.valid && !emailRules.empty && (
            <p className={styles['error']}>Invalid email address</p>
          )}
        </>
      )}

      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        onBlur={() => setTouched({ ...touched, password: true })}
        placeholder="Enter your password"
        required
      />

      {touched.password && (
        <>
          {!passwordRules.latinOnly && password.length > 0 && <p className={styles['error']}>Only Latin characters are allowed</p>}
          {!passwordRules.noSpaces && password.length > 0 && <p className={styles['error']}>Spaces are not allowed</p>}

          <ul>
            <li className={passwordRules.minLength ? styles.valid : styles.error}>
                {passwordRules.minLength ? "✓" : "×"} At least 8 characters
            </li>
            <li className={passwordRules.uppercase ? styles.valid : styles.error}>
                {passwordRules.uppercase ? "✓" : "×"} One uppercase letter
            </li>
            <li className={passwordRules.lowercase ? styles.valid : styles.error}>
              {passwordRules.lowercase ? "✓" : "×"} One lowercase letter
            </li>
            <li className={passwordRules.digit ? styles.valid : styles.error}>
              {passwordRules.digit ? "✓" : "×"} One number
            </li>
            <li className={passwordRules.special ? styles.valid : styles.error}>
              {passwordRules.special ? "✓" : "×"} One special character
            </li>
          </ul>
        </>
      )}

      <Input
        label="Confirm Password"
        id="confirm-password"
        name="confirm-password"
        type="password"
        autoComplete="current-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        onBlur={() => setTouched({ ...touched, confirmPassword: true })}
        placeholder="Confirm your password"
        required
      />

      {touched.confirmPassword && password.length > 0 && (
        <>
          {confirmPasswordRules.empty && 
            <p className={styles['error']}>Confirm your password</p>
          }
          {!confirmPasswordRules.confirm && !confirmPasswordRules.empty && (
            <p className={styles['error']}>Passwords do not match</p>
          )}
        </>
      )}

      <Button type="submit" variant="green">
        Register
      </Button>

      {submitError && <p className={styles['error']}>{submitError}</p>}
    </FormLayout>
  )
}
