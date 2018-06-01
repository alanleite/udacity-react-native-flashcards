import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from '../components'
import styled from 'styled-components'


class CreateDeck extends React.Component {
  static navigationOptions() {
    return {
      title: 'Create a Deck'
    }
  }
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Name</Text>
        <TextInput />
      </View>
    )
  }
}

export default CreateDeck
