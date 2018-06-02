import { connect } from 'react-redux'
import DecksContainer from './DecksContainer'

const stateToProps = (state, props) => ({
  decks: Object.keys(state.decks).map(key => state.decks[key])
})

export default connect(stateToProps, null)(DecksContainer)
