import React from 'react'
import CreateDeckComponent from './CreateDeckComponent'

class CreateDeckContainer extends React.Component {
  static navigationOptions () {
    return {
      title: 'Create a Deck'
    }
  }

  state = { text: '' }

  onChangeText = (text) => this.setState({ text })
  
  onCreate = () => {
    this.props.createDeck(this.state.text)
    this.setState({ text: '' }, () => {
      this.props.navigation.navigate('Decks')
    })
  }

  render () {
    return <CreateDeckComponent 
      {...this.state}
      onChangeText={this.onChangeText}
      onCreate={this.onCreate}
    />
  }
}

export default CreateDeckContainer
