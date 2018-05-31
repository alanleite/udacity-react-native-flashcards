import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import theme from './common/theme'
import reducers from './reducers'
import Root from './containers/Root'

const store = createStore(reducers)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <ThemeProvider theme={theme.light}>
          <Root />
        </ThemeProvider>
      </Provider>
    )
  }
}
