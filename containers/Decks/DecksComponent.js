import React from 'react'
import styled from 'styled-components/native'
import Deck from './Deck'

const Container = styled.View`
  flex: 1;
`

export default ({ decks, deckSelected }) => (
  <Container>
    {decks.map((d, i) => (
      <Deck
        key={i}
        title={d.title}
        count={d.questions.length}
        onPress={() => { deckSelected(d) }}
      />
    ))}
  </Container>
)
