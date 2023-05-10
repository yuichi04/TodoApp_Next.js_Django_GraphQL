import { useQuery, useMutation, gql } from '@apollo/client'

const GET_TASKS = gql`
  query {
    allTasks {
      id
      title
      description
      completed
    }
  }
`

const TaskList = () => {
  const { data, loading, error } = useQuery(GET_TASKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      {data.allTasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description ?? '説明はありません'}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
