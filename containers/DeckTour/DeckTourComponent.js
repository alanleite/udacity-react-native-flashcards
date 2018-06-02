import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../components'
import Tour from './Tour'

const DeckDetails = styled.View`
    flex: 1
    background-color: ${props => props.theme.white}
    justify-content: space-around;
    align-items: center;
`

const DeckTitle = styled.Text`
    font-size: 32px;
`

const DeckSubTitle = styled.Text`
    font-size: 18px;
`

const ScoreTitle = styled.Text`
    font-size: 22px;
    color: ${props => props.theme.accent};
`

export default (props) => {
  const {
    index,
    testing,
    showingAnswer,
    deck,
    onStartTest,
    onCreateQuestion,
    onShowAnswer,
    onCorrect,
    onIncorrect,
    getScoreText
  } = props

  const {
    title,
    questions
  } = deck

  if (!testing) {
    return (
      <DeckDetails>
        <DeckTitle>{title}</DeckTitle>
        <ScoreTitle>{getScoreText()}</ScoreTitle>
        <DeckSubTitle>
          { questions.length === 1 && `There is a test waiting for you` }
          { questions.length > 1 && `There are ${questions.length} tests waiting for you` }
          { questions.length === 0 && `You have not yet created a test` }
        </DeckSubTitle>
        <View>
          <Button title='Start my test' onPress={onStartTest} />
          <Button title='Create a question' onPress={onCreateQuestion} />
        </View>
      </DeckDetails>
    )
  } else {
    return (
      <Tour
        question={questions[index]}
        showingAnswer={showingAnswer}
        onShowAnswer={onShowAnswer}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
    )
  }
}
