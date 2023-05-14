import React, { FC, memo } from 'react'
import {
  BaseCheckbox,
  BaseIconButton,
  BaseTypography,
} from '@/components/atoms'
import { TaskType } from '@/lib/graphql/generated/graphql'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

type TodoItemProps = {
  data: TaskType
}

const TodoItem: FC<TodoItemProps> = (props) => {
  const { title, completed } = props.data
  return (
    <div className="flex justify-between items-center space-x-2">
      <div className="flex items-center">
        <BaseCheckbox value={completed} />
        <BaseTypography>{title}</BaseTypography>
      </div>
      <div className="flex items-center justify-between space-x-1">
        <BaseIconButton color="primary">
          <EditIcon />
        </BaseIconButton>
        <BaseIconButton>
          <DeleteIcon />
        </BaseIconButton>
      </div>
    </div>
  )
}

export default memo(TodoItem)
