import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const DeckTitle = styled.Text`
    font-size: 22px;
`

const DeckSubTitle = styled.Text`
    font-size: 16px;
`

export default ({ title }) => (
  <Content>
    <DeckTitle>{title}</DeckTitle>
  </Content>
)
