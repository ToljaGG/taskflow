import type { Task } from '../model/types'
import { Button } from '@/shared/ui/Button'
import { CompleteTaskButton } from '@/features/complete-task/ui/CompleteTaskButton'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>

      {task.endDate && <p>End date: {task.endDate}</p>}

      <CompleteTaskButton taskId={task.id} />
      <Button variant="default">Edit</Button>
      <Button variant="red">Delete</Button>
    </article>
  )
}