export interface User {
  id: string
  username: string
  email: string
  createdAt: string
}

interface StoredUser extends User {
  passwordHash: string
}

const USERS_KEY = "taskflow:users"
const CURRENT_USER_KEY = "taskflow:currentUser"

function getUsers(): StoredUser[] {
  const data = localStorage.getItem(USERS_KEY)

  return data ? (JSON.parse(data) as StoredUser[]) : []
}

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password)
  const hash = await crypto.subtle.digest("SHA-256", data)

  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

export async function registerUser(data: {
  username: string
  email: string
  password: string
}): Promise<User> {
  const users = getUsers()
  const email = data.email.trim().toLowerCase()

  if (users.some((user) => user.email === email)) {
    throw new Error("An account with this email already exists.")
  }

  const passwordHash = await hashPassword(data.password)

  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    username: data.username.trim(),
    email,
    createdAt: new Date().toISOString(),
    passwordHash,
  }

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify([...users, newUser]),
  )

  localStorage.setItem(CURRENT_USER_KEY, newUser.id)

  const { passwordHash: _, ...user } = newUser
  return user
}

export async function loginUser(
  email: string,
  password: string,
): Promise<User> {
  const normalizedEmail = email.trim().toLowerCase()
  const users = getUsers()
  const user = users.find((item) => item.email === normalizedEmail)

  if (!user || user.passwordHash !== (await hashPassword(password))) {
    throw new Error("Invalid email or password.")
  }

  localStorage.setItem(CURRENT_USER_KEY, user.id)

  const { passwordHash: _, ...publicUser } = user
  return publicUser
}

export function getCurrentUser(): User | null {
  const userId = localStorage.getItem(CURRENT_USER_KEY)

  if (!userId) return null

  const user = getUsers().find((item) => item.id === userId)

  if (!user) return null

  const { passwordHash: _, ...publicUser } = user
  return publicUser
}

export function logoutUser(): void {
  localStorage.removeItem(CURRENT_USER_KEY)
}