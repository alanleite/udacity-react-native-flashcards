import React from 'react'
import DeckTourComponent from './DeckTourComponent'

class DeckTourContainer extends React.Component {

  state = { 
    index: 0, 
    testing: false, 
    showingAnswer: false, 
    correct: 0,
    lastQuestion: false 
  }

  onStartTest = () => {
    this.setState({
      index: 0,
      testing: true,
      showingAnswer: false,
      correct: 0,
      lastQuestion: false
    })
  }

  onClear = () => {
    this.setState({
      index: 0,
      testing: false,
      showingAnswer: false,
      correct: 0,
      lastQuestion: false,
      testing: false
    })
  }

  onCreateQuestion = () => {
    const deck = this.props.deck
    this.props.navigation.navigate('CreateQuestion', { deck: deck.name })
  }

  onShowAnswer = () => {
    this.setState({ showingAnswer: true })
  }

  onCorrect = () => {
    this.setState(state => {
      const deck = this.props.deck
      return {
        correct: state.correct + 1,
        index: state.index + 1,
        showingAnswer: false,
        lastQuestion: (state.index + 1) >= deck.questions.length
      }
    })
  }

  onIncorrect = () => {
    this.setState(state => {
      const deck = this.props.deck
      return {
        index: state.index + 1,
        showingAnswer: false,
        lastQuestion: (state.index + 1) >= deck.questions.length
      }
    })
  }

  getScoreText = () => {
    const deck = this.props.deck
    if(deck.questions.length === 0) return '--'
    const total = this.state.correct / deck.questions.length * 100
    return `You match ${total.toFixed(0)}% of the questions`
  }

  render () {
    return <DeckTourComponent
      {...this.state}
      deck={this.props.deck}
      onStartTest={this.onStartTest}
      onCreateQuestion={this.onCreateQuestion}
      onShowAnswer={this.onShowAnswer}
      onCorrect={this.onCorrect}
      onIncorrect={this.onIncorrect}
      getScoreText={this.getScoreText}
      onClear={this.onClear}
    />
  }
}

export default DeckTourContainer
