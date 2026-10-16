import type { Task } from '../model/types'
import styles from './TaskCard.module.css'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../../app/store'
import { changeTaskStatus, deleteTask } from '../../../entities/task/model/taskSlice'
import { Button } from '@/shared/ui/Button'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
    const dispatch = useDispatch<AppDispatch>()

  return (
    <article className={styles['card']}>
      <h2>{task.title}</h2>

      <p>
        Priority: {task.priority} | 
        Status: {task.status} | 
        Created: {task.createdDate} | 
        Completed: {task.completedDate ?? '-'}
      </p>

      <div className={styles['buttons']}>
        <Button onClick={() => dispatch(changeTaskStatus({ id: task.id, status: 'done' }))}>
          Done
        </Button>
        <Button onClick={() => dispatch(changeTaskStatus({ id: task.id, status: 'in-progress' }))}>
          In Progress
        </Button>
        <Button onClick={() => dispatch(changeTaskStatus({ id: task.id, status: 'todo' }))}>
          To Do
        </Button>
        <Button onClick={() => dispatch(deleteTask(task.id))} variant="red">
          Delete
        </Button>
      </div>

    </article>
  )
}