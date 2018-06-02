import React from 'react'
import DecksComponent from './DecksComponent'

class DecksContainer extends React.Component {
  static navigationOptions () {
    return {
      title: 'Decks'
    }
  }
  deckSelected = (deck) => {
    const { navigation } = this.props
    // FIXME: Não consegui descobrir o porque, mas só no segundo tap que esse navigate funciona. O evento é chamado normalmente e os dados chegam!
    navigation.navigate('DeckTour', deck)
  }
  render () {
    return <DecksComponent
      decks={this.props.decks}
      deckSelected={this.deckSelected}
    />
  }
}

export default DecksContainer
