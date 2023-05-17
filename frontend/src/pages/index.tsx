import { FC } from 'react'
import Head from 'next/head'
import { BaseContainer } from '@/components/uikit'
import { TodoForm } from '@/components/Todo'

const TaskList: FC = () => {
  return (
    <>
      <Head>
        <title>NextDjangoGraphQLTodoApp</title>
      </Head>

      <div className="bg-slate-100 w-screen min-h-screen p-16">
        <BaseContainer maxWidth="md">
          <TodoForm />
        </BaseContainer>
      </div>
    </>
  )
}

export default TaskList
