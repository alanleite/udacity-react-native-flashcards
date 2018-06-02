import { connect } from 'react-redux'
import DeckTourContainer from './DeckTourContainer'

const stateToProps = (state, props) => ({
  deck: state.decks[props.navigation.state.params.name]
})

export default connect(stateToProps, null)(DeckTourContainer)
