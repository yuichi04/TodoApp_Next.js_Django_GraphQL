import React, { FC, memo } from 'react'
import { BaseIconButton, BaseTextField } from '@/components/atoms'
import { BaseIconButtonProps } from '@/components/atoms/BaseIconButton'
import { BaseTextFieldProps } from '@/components/atoms/BaseTextField'

type TextFieldButtonProps = {
  textField?: BaseTextFieldProps
  button?: BaseIconButtonProps
  icon: React.ReactNode
}

const TextFieldButton: FC<TextFieldButtonProps> = (props) => {
  const { textField, button, icon } = props
  return (
    <form className="flex justify-between items-center w-full">
      <BaseTextField fullWidth size="small" margin="none" {...textField} />
      <BaseIconButton {...button}>{icon}</BaseIconButton>
    </form>
  )
}

export default memo(TextFieldButton)
