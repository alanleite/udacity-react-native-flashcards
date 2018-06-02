import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { withTheme } from 'styled-components'
import Decks from '../Decks'
import DeckTour from '../DeckTour'
import CreateQuestion from '../CreateQuestion'

// Alguma forma melhor de obter o theme context?
const RootTab = ({ theme }) => {
  const tabs = {
    Decks: {
      screen: Decks
    },
    DeckTour: {
      screen: DeckTour
    },
    CreateQuestion: {
      screen: CreateQuestion
    }
  }

  const options = {
    initialRouteName: 'Decks',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: theme.white
    }
  }

  const Tab = createStackNavigator(tabs, options)

  return <Tab />
}

export default withTheme(RootTab)
