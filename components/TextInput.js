import styled from 'styled-components/native'

const TextInput = styled.TextInput`
    margin: 10px;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-color: ${props => props.theme.lightgrey};
    min-width: 140px;
`

export default TextInput
