import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "@/app/store"
import { loginUser } from "@/features/auth/model/auth"
import { setCurrentUser } from "@/features/auth/model/authSlice"

import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { FormLayout } from "@/shared/ui/FormLayout"

export function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [submitError, setSubmitError] = useState("")

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const user = await loginUser(email, password)
      dispatch(setCurrentUser(user))
      navigate("/")
    } catch (error) {
      setSubmitError(
      error instanceof Error
      ? error.message
      : "Login failed.",
      )
    }
  }

  return (
    <FormLayout onSubmit={handleSubmit} title="Login">
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

      {submitError && <p style={{ color: "red", fontWeight: "bold" }}>{submitError}</p>}
    </FormLayout>
  )
}
