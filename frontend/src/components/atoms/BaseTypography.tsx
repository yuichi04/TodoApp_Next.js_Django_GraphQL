import React, { FC } from 'react'
import { Typography, TypographyProps } from '@mui/material'

export type BaseTypographyProps = TypographyProps

const BaseTypography: FC<BaseTypographyProps> = (props) => {
  return <Typography {...props} />
}

export default BaseTypography
