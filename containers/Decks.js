import React from 'react'
import { View, Text } from 'react-native'
import { Deck } from '../components'

class CreateDeck extends React.Component {
  static navigationOptions() {
    return {
      title: 'Decks'
    }
  }
  render () {
    return (
      <View style={{ 
        flex: 1, 
      }}>
        <Deck
          title="Star Wars1"
          count="3"
        />
                <Deck
          title="Star Wars2"
          count="3"
        />
                <Deck
          title="Star Wars3"
          count="3"
        />
                <Deck
          title="Star Wars4"
          count="3"
        />
      </View>
    )
  }
}

export default CreateDeck
