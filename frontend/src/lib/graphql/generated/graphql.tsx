import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

/** 新しいタスクを作成するためのGraphQLミューテーション */
export type CreateTask = {
  __typename?: 'CreateTask'
  task?: Maybe<TaskType>
}

/** 新しいタスクを作成するための入力オブジェクト */
export type CreateTaskInput = {
  completed?: InputMaybe<Scalars['Boolean']>
  createdDate?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

/** タスクを削除するためのGraphQLミューテーション */
export type DeleteTask = {
  __typename?: 'DeleteTask'
  ok?: Maybe<Scalars['Boolean']>
}

/** 全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ */
export type RootMutation = {
  __typename?: 'RootMutation'
  /** 新しいタスクを作成するためのGraphQLミューテーション */
  createTask?: Maybe<CreateTask>
  /** タスクを削除するためのGraphQLミューテーション */
  deleteTask?: Maybe<DeleteTask>
  /** 既存のタスクを更新するためのGraphQLミューテーション */
  updateTask?: Maybe<UpdateTask>
}

/** 全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ */
export type RootMutationCreateTaskArgs = {
  input: CreateTaskInput
}

/** 全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ */
export type RootMutationDeleteTaskArgs = {
  id: Scalars['ID']
}

/** 全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ */
export type RootMutationUpdateTaskArgs = {
  input: UpdateTaskInput
}

/** 全てのクエリをまとめるためのGraphQLオブジェクトタイプ */
export type RootQuery = {
  __typename?: 'RootQuery'
  /** タスクの一覧を取得するフィールド */
  allTasks?: Maybe<Array<Maybe<TaskType>>>
  /** 特定のタスクを取得するフィールド */
  task?: Maybe<TaskType>
}

/** 全てのクエリをまとめるためのGraphQLオブジェクトタイプ */
export type RootQueryTaskArgs = {
  id?: InputMaybe<Scalars['Int']>
}

/** Taskモデルの全てのフィールドが含まれたGraphQLタイプ */
export type TaskType = {
  __typename?: 'TaskType'
  completed: Scalars['Boolean']
  createdDate: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
}

/** 既存のタスクを更新するためのGraphQLミューテーション */
export type UpdateTask = {
  __typename?: 'UpdateTask'
  task?: Maybe<TaskType>
}

/** 既存のタスクを更新するための入力オブジェクト */
export type UpdateTaskInput = {
  completed?: InputMaybe<Scalars['Boolean']>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  title?: InputMaybe<Scalars['String']>
}

export type AllTasksQueryVariables = Exact<{ [key: string]: never }>

export type AllTasksQuery = {
  __typename?: 'RootQuery'
  allTasks?: Array<{
    __typename?: 'TaskType'
    id: string
    title: string
    description?: string | null
    completed: boolean
    createdDate: any
  } | null> | null
}

export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput
}>

export type CreateTaskMutation = {
  __typename?: 'RootMutation'
  createTask?: {
    __typename?: 'CreateTask'
    task?: {
      __typename?: 'TaskType'
      id: string
      title: string
      description?: string | null
      completed: boolean
      createdDate: any
    } | null
  } | null
}

export const AllTasksDocument = gql`
  query allTasks {
    allTasks {
      id
      title
      description
      completed
      createdDate
    }
  }
`

/**
 * __useAllTasksQuery__
 *
 * To run a query within a React component, call `useAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTasksQuery, AllTasksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllTasksQuery, AllTasksQueryVariables>(
    AllTasksDocument,
    options
  )
}
export function useAllTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTasksQuery,
    AllTasksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllTasksQuery, AllTasksQueryVariables>(
    AllTasksDocument,
    options
  )
}
export type AllTasksQueryHookResult = ReturnType<typeof useAllTasksQuery>
export type AllTasksLazyQueryHookResult = ReturnType<
  typeof useAllTasksLazyQuery
>
export type AllTasksQueryResult = Apollo.QueryResult<
  AllTasksQuery,
  AllTasksQueryVariables
>
export const CreateTaskDocument = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      task {
        id
        title
        description
        completed
        createdDate
      }
    }
  }
`
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options
  )
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>
