import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../components'
import { registerNotification, clearLocalNotification } from '../../common/helpers'

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

const ScoreTitle = styled.Text`
    font-size: 22px;
    color: ${props => props.theme.accent};
`
class TourCompleted extends React.Component {
  componentDidMount() {
    clearLocalNotification()
      .then(registerNotification)
  }
  render() {
    const { getScoreText, onStartTest, onClear } = this.props
    return (
      <DeckDetails>
        <DeckTitle>You finished the test.</DeckTitle>
        <ScoreTitle>{getScoreText()}</ScoreTitle>
        <View>
          <Button title='Restart' onPress={onStartTest} />
          <Button title='Back to Deck' onPress={onClear} />
        </View>
      </DeckDetails>
    )
  }
}

export default TourCompleted