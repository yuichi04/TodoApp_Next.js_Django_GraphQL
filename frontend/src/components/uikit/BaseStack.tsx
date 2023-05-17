import React, { FC } from 'react'
import { Stack, StackProps } from '@mui/material'

export type BaseStackProps = StackProps

const BaseStack: FC<BaseStackProps> = (props) => {
  return <Stack {...props} />
}

export default BaseStack
