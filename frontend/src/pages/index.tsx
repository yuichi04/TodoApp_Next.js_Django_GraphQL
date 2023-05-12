import { useAllTasksQuery } from '@/lib/graphql/generated/graphql'
import { FC } from 'react'

const TaskList: FC = () => {
  const { data, loading, error } = useAllTasksQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <ul>
        {data?.allTasks?.map((task) => (
          <li key={task?.id}>{task?.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
