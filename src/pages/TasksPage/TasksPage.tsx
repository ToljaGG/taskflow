import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import { TaskCard } from '../../entities/task/ui/TaskCard'

export function TasksPage() {
  const tasks = useSelector(
    (state: RootState) => state.tasks.tasks,
  )

  return (
    <main>
      <h1>My tasks</h1>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </main>
  )
}