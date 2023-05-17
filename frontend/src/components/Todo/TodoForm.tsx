import React, { useState, useCallback, useEffect, memo } from 'react'
import {
  useAllTasksQuery,
  useCreateTaskMutation,
  TaskType,
} from '@/lib/graphql/generated/graphql'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import TodoItem from './TodoItem'
import TodoTextFieldIconButton from './TodoTextFieldIconButton'
import { BasePaper } from '../uikit'

const TodoForm = () => {
  const { data: allTasksData } = useAllTasksQuery()
  const [createTask, { loading: createTaskLoading }] = useCreateTaskMutation()
  const [tasks, setTasks] = useState<TaskType[]>([])

  useEffect(() => {
    if (allTasksData?.allTasks) {
      setTasks(
        allTasksData.allTasks.filter((task): task is TaskType => task !== null)
      )
    }
  }, [allTasksData])

  const handleCreateTask = useCallback(
    async (title: string) => {
      try {
        const result = await createTask({
          variables: {
            input: {
              title,
            },
          },
        })

        const newTask = result.data?.createTask?.task
        if (newTask) {
          setTasks((prevTasks) => [...prevTasks, newTask])
        }
      } catch (err) {
        console.error(err)
      }
    },
    [createTask]
  )

  return (
    <BasePaper elevation={2}>
      <div className="p-8">
        <div className="mb-8">
          <TodoTextFieldIconButton
            button={{
              color: 'primary',
              size: 'large',
            }}
            icon={<AddCircleIcon fontSize="large" />}
            onCreateTask={handleCreateTask}
            loading={createTaskLoading}
          />
        </div>
        {tasks.map((task) => (
          <TodoItem key={task.id} data={task} />
        ))}
      </div>
    </BasePaper>
  )
}

export default memo(TodoForm)
