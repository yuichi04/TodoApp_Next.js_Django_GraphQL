import React, { FC } from 'react'
import { ButtonProps, Button } from '@mui/material'
import BaseTypography from './BaseTypography'

export type BaseButtonProps = ButtonProps & { label: string }

const BaseButton: FC<BaseButtonProps> = ({ ...props }) => {
  return (
    <Button variant="contained" fullWidth {...props}>
      <BaseTypography>{props.label}</BaseTypography>
    </Button>
  )
}

export default BaseButton
