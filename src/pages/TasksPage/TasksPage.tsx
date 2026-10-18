import { TaskList } from '@/widgets/TaskList'
import styles from './TasksPage.module.css'

export function TasksPage() {
  return (
    <main>
      <section className={styles['tasks-section']}>
        <h2>My tasks</h2>
        <TaskList />
      </section>
    </main>
  )
}