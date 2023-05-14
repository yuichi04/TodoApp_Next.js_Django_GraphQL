import React, { FC } from 'react'
import { Checkbox, CheckboxProps } from '@mui/material'

export type BaseCheckboxProps = CheckboxProps

const BaseCheckbox: FC<BaseCheckboxProps> = (props) => {
  return <Checkbox {...props} />
}

export default BaseCheckbox
