import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Button = styled.View`
    margin: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 30px;
    padding-left: 30px;
    background-color: ${props => props.theme.accent};
    min-width: 140px;
    justify-content: center;
    align-items: center;
`

const Label = styled.Text`
    color: ${props => props.theme.white};
`

export default ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Label>{title}</Label>
    </Button>
  </TouchableOpacity>
)
