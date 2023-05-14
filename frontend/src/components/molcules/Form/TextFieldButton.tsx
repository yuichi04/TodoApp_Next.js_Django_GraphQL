import React, { FC, memo } from 'react'
import { BaseButton, BaseTextField } from '@/components/atoms'
import { BaseButtonProps } from '@/components/atoms/BaseButton'

type TextFieldButtonProps = BaseButtonProps

const TextFieldButton: FC<TextFieldButtonProps> = (props) => {
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

export default memo(TextFieldButton)
