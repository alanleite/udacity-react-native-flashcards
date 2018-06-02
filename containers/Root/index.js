import { connect } from 'react-redux'
import { loadDecks } from '../../common/actions'
import RootContainer from './RootContainer'

const dispatchToProps = (dispatch, props) => ({
  load: () => dispatch(loadDecks())
})

export default connect(null, dispatchToProps)(RootContainer)
