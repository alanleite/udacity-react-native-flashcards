import React from 'react'
import { StatusBar, Container } from '../../components'
import DeckStack from '../DeckStack'

class Root extends React.Component {
  componentDidMount () {
    this.props.load()
  }
  render () {
    return (
      <Container>
        <StatusBar />
        <DeckStack />
      </Container>
    )
  }
}

export default Root
