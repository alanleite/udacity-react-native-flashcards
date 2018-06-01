import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const DeckCard = styled.View`
    margin: 5px 10px 5px 10px;
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.white}
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`

const DeckTitle = styled.Text`
    font-size: 22px;
`

const DeckSubTitle = styled.Text`
    font-size: 16px;
`


class Deck extends React.Component {
    render() {
        const { title, count, onPress } = this.props
        return (
            <TouchableOpacity onPress={onPress}>
                <DeckCard>
                    <DeckTitle>{title}</DeckTitle>
                    <DeckSubTitle>{count} cards</DeckSubTitle>
                </DeckCard>
            </TouchableOpacity>
        )
    }
}

export default Deck