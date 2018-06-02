import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components/native'
import theme from './common/theme'
import reducers from './common/reducers'
import Root from './containers/Root'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </Provider>
    )
  }
}
