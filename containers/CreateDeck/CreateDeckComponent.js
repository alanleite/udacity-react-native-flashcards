import React from 'react'
import styled from 'styled-components/native'
import { TextInput, Button } from '../../components'

const AvoidContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  margin-right: 30px;
  margin-left: 30px;
  text-align: center;
`

export default ({ text, onCreate, onChangeText }) => (
  <AvoidContainer behavior='padding'>
    <Title>What will be the name of the Deck?</Title>
    <TextInput value={text} onChangeText={onChangeText} />
    <Button title='Create' onPress={onCreate} />
  </AvoidContainer>
)
