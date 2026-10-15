import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../../app/store'
import { toggleTaskStatus } from '../../../entities/task/model/taskSlice'
import { Button } from '@/shared/ui/Button'

interface CompleteTaskButtonProps {
  taskId: string
}

export function CompleteTaskButton({
  taskId,
}: CompleteTaskButtonProps) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Button variant="green" onClick={() => dispatch(toggleTaskStatus(taskId))}>
      Complete
    </Button>
  )
}