import React, { FC } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export type BaseTextFieldProps = TextFieldProps

const BaseTextField: FC<BaseTextFieldProps> = (props) => {
  return <TextField {...props} />
}

export default BaseTextField
