import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../components'

const DeckDetails = styled.View`
    flex: 1
    background-color: ${props => props.theme.white}
    justify-content: space-around;
    align-items: center;
`

const DeckTitle = styled.Text`
    font-size: 28px;
    margin: 20px;
    text-align: center;
`

const DeckSubTitle = styled.Text`
    font-size: 16px;
    margin: 10px;
    text-align: center;
`

const DeckCounter = styled.Text`
    font-size: 12px;
    text-align: center;
`

export default ({ question, showingAnswer, countText, onShowAnswer, onCorrect, onIncorrect }) => (
  <DeckDetails>
    <DeckCounter>{countText}</DeckCounter>
    <DeckTitle>{question.question}</DeckTitle>
    {showingAnswer && <DeckSubTitle>{question.answer}</DeckSubTitle>}
    <View>
      {!showingAnswer && <Button title='Show me the answer' onPress={onShowAnswer} />}
      {showingAnswer && <Button title='Correct' onPress={onCorrect} />}
      {showingAnswer && <Button title='Incorrect' onPress={onIncorrect} />}
    </View>
  </DeckDetails>
)
