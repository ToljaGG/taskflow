import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import { TaskCard } from '../../entities/task/ui/TaskCard'
import styles from './TasksPage.module.css'

export function TasksPage() {
  const tasks = useSelector(
    (state: RootState) => state.tasks.tasks,
  )

  return (
    <main>
      <section className={styles['tasks-section']}>
        <h1>My tasks</h1>
        <div className={styles['tasks-container']}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  )
}