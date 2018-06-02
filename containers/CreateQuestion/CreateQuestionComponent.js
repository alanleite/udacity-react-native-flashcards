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

export default ({ question, answer, onCreate, onChangeText }) => (
  <AvoidContainer behavior='padding'>
    <Title>What's the question?</Title>
    <TextInput
      value={question}
      onChangeText={(t) => { onChangeText('question', t) }} />
    <Title>What is the answer?</Title>
    <TextInput
      value={answer}
      onChangeText={(t) => { onChangeText('answer', t) }} />
    <Button title='Create' onPress={onCreate} />
  </AvoidContainer>
)
