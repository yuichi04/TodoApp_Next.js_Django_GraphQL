import React, { FC, memo, useState } from 'react'
import { BaseIconButton, BaseTextField } from '@/components/uikit'
import { BaseIconButtonProps } from '@/components/uikit/BaseIconButton'
import { BaseTextFieldProps } from '@/components/uikit/BaseTextField'

type TodoTextFieldButtonProps = {
  textField?: BaseTextFieldProps
  button?: BaseIconButtonProps
  icon: React.ReactNode
  loading: boolean
  // eslint-disable-next-line no-unused-vars
  onCreateTask: (title: string) => Promise<void>
}

const TodoTextFieldButton: FC<TodoTextFieldButtonProps> = (props) => {
  const { textField, button, icon, loading, onCreateTask } = props
  const [task, setTask] = useState<string>('')

  /**
   * タスクの入力
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  /**
   * タスクの作成
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onCreateTask(task)
    setTask('')
  }

  return (
    <form
      className="flex justify-between items-center w-full"
      onSubmit={handleSubmit}
    >
      <BaseTextField
        fullWidth
        size="small"
        margin="none"
        value={task}
        onChange={handleChange}
        disabled={loading}
        {...textField}
      />
      <BaseIconButton disabled={loading} type="submit" {...button}>
        {icon}
      </BaseIconButton>
    </form>
  )
}

export default memo(TodoTextFieldButton)
