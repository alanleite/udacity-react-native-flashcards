import React from 'react'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
    margin: 5px 10px 5px 10px;
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.white}
    border-color: ${props => props.theme.lightgrey};
`

export default TextInput