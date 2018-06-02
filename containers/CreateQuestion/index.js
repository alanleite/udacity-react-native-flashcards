import { connect } from 'react-redux'
import { createQuestion } from '../../common/actions'
import CreateQuestionContainer from './CreateQuestionContainer'

const dispatchToProps = (dispatch) => ({
  createQuestion: (d, q, a) => { dispatch(createQuestion(d, q, a)) }
})

export default connect(null, dispatchToProps)(CreateQuestionContainer)
