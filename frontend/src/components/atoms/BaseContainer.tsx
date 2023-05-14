import React, { FC } from 'react'
import { Container, ContainerProps } from '@mui/material'

export type BaseContainerProps = ContainerProps

const BaseContainer: FC<BaseContainerProps> = (props) => {
  return <Container {...props} />
}

export default BaseContainer
