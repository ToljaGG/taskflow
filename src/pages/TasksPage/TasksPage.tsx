import { TaskList } from '@/widgets/TaskList'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import styles from './TasksPage.module.css'

export function TasksPage() {
  return (
    <main>
      <section className={styles['tasks-section']}>
        <div className={styles['tasks-header']}>
          <h2>My tasks</h2>
          <Input placeholder="Search tasks..." />
          <Button variant="green">Add task</Button>
        </div>

        <TaskList />
      </section>
    </main>
  )
}