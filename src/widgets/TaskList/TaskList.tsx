import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import { TaskCard } from '@/entities/task/ui/TaskCard'
import styles from './TaskList.module.css'

export function TaskList() {
  const tasks = useSelector(
    (state: RootState) => state.tasks.tasks,
  )

  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}