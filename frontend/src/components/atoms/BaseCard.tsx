import React, { FC } from 'react'
import { Card, CardProps } from '@mui/material'

export type BaseCardProps = CardProps

const BaseCard: FC<BaseCardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>
}

export default BaseCard
