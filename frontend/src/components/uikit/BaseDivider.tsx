import React, { FC } from 'react'
import Divider from '@mui/material/Divider'
import { DividerProps } from '@mui/material/Divider'

export type BaseDividerProps = DividerProps

const BaseDivider: FC<BaseDividerProps> = (props) => {
  return <Divider {...props} />
}

export default BaseDivider
