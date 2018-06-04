import React from 'react'
import { StatusBar, Container } from '../../components'
import RootStack from '../RootStack'

class Root extends React.Component {
  componentDidMount () {
    this.props.load()
  }
  render () {
    return (
      <Container>
        <StatusBar />
        <RootStack />
      </Container>
    )
  }
}

export default Root
