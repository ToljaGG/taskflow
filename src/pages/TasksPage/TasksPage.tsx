import { useState } from "react"
import { TaskList } from "@/widgets/TaskList"
import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { Modal } from "@/shared/ui/Modal"
import styles from "./TasksPage.module.css"

export function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main>
      <section className={styles["tasks-section"]}>
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
