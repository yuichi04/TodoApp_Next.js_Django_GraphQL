import React, { FC, memo } from 'react'
import { BaseButton, BaseTextField } from '@/components/uikit'
import { BaseButtonProps } from '@/components/uikit/BaseButton'

type TodoTextFieldButtonProps = BaseButtonProps

const TodoTextFieldButton: FC<TodoTextFieldButtonProps> = (props) => {
  return (
    <form className="flex items-center w-full">
      <div className="w-4/5 mr-4">
        <BaseTextField fullWidth size="small" margin="none" />
      </div>
      <div className="w-1/5">
        <BaseButton fullWidth variant="contained" label={props.label} />
      </div>
    </form>
  )
}

export default memo(TodoTextFieldButton)
