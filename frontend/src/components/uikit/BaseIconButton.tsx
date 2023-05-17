import React, { FC } from 'react'
import { IconButton, IconButtonProps } from '@mui/material'

export type BaseIconButtonProps = IconButtonProps

const BaseIconButton: FC<BaseIconButtonProps> = (props) => {
  return <IconButton {...props} />
}

export default BaseIconButton
