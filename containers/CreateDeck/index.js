import { connect } from 'react-redux'
import { createDeck } from '../../common/actions'
import CreateDeckContainer from './CreateDeckContainer'

const dispatchToProps = (dispatch) => ({
  createDeck: (t) => { dispatch(createDeck(t)) }
})

export default connect(null, dispatchToProps)(CreateDeckContainer)
