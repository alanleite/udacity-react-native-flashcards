import React from 'react'
import { StatusBar, Container } from '../../components'
import RootTab from '../RootTab'

class Root extends React.Component {
  componentDidMount () {
    this.props.load()
  }
  render () {
    return (
      <Container>
        <StatusBar />
        <RootTab />
      </Container>
    )
  }
}

export default Root
