import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { withTheme } from 'styled-components'
import Decks from './Decks'
import CreateDeck from './CreateDeck'

// Alguma forma melhor de obter o theme context?
const RootTab = ({ theme }) => {

  const tabs = {
    Decks: Decks,
    CreateDeck: CreateDeck
  }
  
  const options = {
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
  }

  const Tab = createMaterialTopTabNavigator(tabs, options)

  return <Tab/>

}

export default withTheme(RootTab)