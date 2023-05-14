import { useAllTasksQuery } from '@/lib/graphql/generated/graphql'
import { FC } from 'react'
import Head from 'next/head'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  BaseContainer,
  BaseDivider,
  BasePaper,
  BaseStack,
} from '@/components/atoms'
import { TextFieldIconButton } from '@/components/molcules'
import { TodoItem } from '@/components/organisms'

const TaskList: FC = () => {
  const { data, loading, error } = useAllTasksQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <Head>
        <title>NextDjangoGraphQLTodoApp</title>
      </Head>

      <div className="bg-slate-100 w-screen h-screen">
        <BaseContainer maxWidth="md">
          <BasePaper elevation={2}>
            <TextFieldIconButton
              button={{ color: 'primary', size: 'large' }}
              icon={<AddCircleIcon fontSize="large" />}
            />
            <BaseStack spacing={2} divider={<BaseDivider />}>
              {data?.allTasks?.map((task) => (
                <li key={task?.id} className=" list-none">
                  {task && <TodoItem data={task} />}
                </li>
              ))}
            </BaseStack>
          </BasePaper>
        </BaseContainer>
      </div>
    </>
  )
}

export default TaskList
