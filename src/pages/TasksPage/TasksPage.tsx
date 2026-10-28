import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type { RootState } from "@/app/store"

import { TaskList } from "@/widgets/TaskList"
import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { Modal } from "@/shared/ui/Modal"

import styles from "./TasksPage.module.css"

export function TasksPage() {
  const navigate = useNavigate()
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser,
  )

  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!currentUser) {
    return (
      <main>
        <section className={`${styles.section} ${styles.welcome}`}>
          <h2>Welcome to TaskFlow! 👋</h2>
          <p>Organize your tasks, track your progress, and get things done.</p>
          <p>To get started, log in to your account or create a new one.</p>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className={`${styles.section} ${styles.tasks}`}>
        <div className={styles["tasks-header"]}>
          <h2>My tasks</h2>
          <Input placeholder="Search tasks..." />
          <Button variant="green" onClick={() => setIsModalOpen(true)}>
            Add task
          </Button>
        </div>

        {isModalOpen && (
          <Modal title="Add new task" onClose={() => setIsModalOpen(false)}>
            <Input placeholder="Task title" label="Title" />
            <Input placeholder="Task description" label="Description" />
            <Button variant="green">Add</Button>
          </Modal>
        )}

        <TaskList />
      </section>
    </main>
  )
}
