import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const DeckCard = styled.View`
    margin: 5px 10px 5px 10px;
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.brown};
    justify-content: center;
    align-items: center;
`

const DeckTitle = styled.Text`
    font-size: 22px;
    color: ${props => props.theme.accent};
`

const DeckSubTitle = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.white};
`

export default ({ title, count, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <DeckCard>
      <DeckTitle>{title}</DeckTitle>
      <DeckSubTitle>{count} cards</DeckSubTitle>
    </DeckCard>
  </TouchableOpacity>
)
