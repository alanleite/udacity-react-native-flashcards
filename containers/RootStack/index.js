import React from 'react'
import { 
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { withTheme } from 'styled-components'
import Decks from '../Decks'
import CreateDeck from '../CreateDeck'
import DeckTour from '../DeckTour'
import CreateQuestion from '../CreateQuestion'

const RootStack = ({ theme }) => {
  const tabs = {
    Root: {
      screen: createMaterialTopTabNavigator({
        Decks: Decks,
        CreateDeck: CreateDeck
      }, {
        initialRouteName: 'Decks',
        tabBarOptions: {
          activeTintColor: theme.accent,
          inactiveTintColor: theme.white,
          style: {
            backgroundColor: theme.grey
          },
          indicatorStyle: {
            backgroundColor: theme.accent
          }
        }
      })
    },
    DeckTour: {
      screen: DeckTour
    },
    CreateQuestion: {
      screen: CreateQuestion
    }
  }

  const options = {
    initialRouteName: 'Root',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: theme.white
    }
  }

  const Tab = createStackNavigator(tabs, options)

  return <Tab />
}

export default withTheme(RootStack)
