import React from 'react'
import CreateQuestionComponent from './CreateQuestionComponent'

class CreateQuestionContainer extends React.Component {

  state = { question: '', answer: '' }

  getParams = () => this.props.navigation.state.params

  onChangeText = (name, text) => this.setState({ [name]: text })
  
  onCreate = () => {
    const params = this.getParams()
    this.props.createQuestion(
      params.deck,
      this.state.question, 
      this.state.answer
    )
    this.setState({ question: '', answer: '' }, () => {
      this.props.navigation.goBack()
    })
  }

  render () {
    return <CreateQuestionComponent 
      {...this.state}
      onChangeText={this.onChangeText}
      onCreate={this.onCreate}
    />
  }
}

export default CreateQuestionContainer
