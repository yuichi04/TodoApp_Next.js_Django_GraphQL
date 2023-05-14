import React, { FC } from 'react'
import { Paper, PaperProps } from '@mui/material'

export type BasePaperProps = PaperProps

const BasePaper: FC<BasePaperProps> = (props) => {
  return <Paper {...props} />
}

export default BasePaper
