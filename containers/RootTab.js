import { createMaterialTopTabNavigator } from 'react-navigation'
import Decks from './Decks'
import CreateDeck from './CreateDeck'

const tabOptions = {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
}

export default createMaterialTopTabNavigator({
  Decks: Decks,
  CreateDeck: CreateDeck
}, tabOptions)
