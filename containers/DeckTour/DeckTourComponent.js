import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../components'
import Tour from './Tour'
import TourCompleted from './TourCompleted'

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

export default (props) => {
  const {
    index,
    testing,
    showingAnswer,
    lastQuestion,
    deck,
    onStartTest,
    onClear,
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
        <DeckSubTitle>
          { questions.length === 1 && `There is a test waiting for you` }
          { questions.length > 1 && `There are ${questions.length} tests waiting for you` }
          { questions.length === 0 && `You have not yet created a test` }
        </DeckSubTitle>
        <View>
          { questions.length > 1 && <Button title='Start my test' onPress={onStartTest} /> }
          <Button title='Create a question' onPress={onCreateQuestion} />
        </View>
      </DeckDetails>
    )
  } else if (!lastQuestion) {
    return (
      <Tour
        question={questions[index]}
        showingAnswer={showingAnswer}
        onShowAnswer={onShowAnswer}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
        countText={`${index + 1} of ${questions.length}`}
      />
    )
  } else {
    return (
      <TourCompleted
        getScoreText={getScoreText}
        onStartTest={onStartTest}
        onClear={onClear}
      />
    )
  }
}
