import React from 'react'
import { View } from 'react-native'
import { StatusBar, Container } from '../components'
import RootTab from './RootTab'

export default () => (
  <Container>
    <StatusBar/>
    <RootTab />
  </Container>
)
