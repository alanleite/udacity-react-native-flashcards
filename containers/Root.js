import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Decks from './Decks'
import CreateDeck from './CreateDeck'

const tabOptions = {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
}

const Tab = createMaterialTopTabNavigator({
    Decks: Decks,
    CreateDeck: CreateDeck
}, tabOptions)

export default () => (
    <View>
        <View style={{ height: 20 }}></View>
        <Tab />
        <Text>Teste!</Text>
    </View>
)