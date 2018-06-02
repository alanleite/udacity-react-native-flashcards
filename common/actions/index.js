import {
  AsyncStorage
} from 'react-native'

import {
  decksLoaded,
  deckCreated,
  questionCreated,
  DATABASE_KEY
} from '../constants'

import {
  slugify
} from '../helpers'

import initialDb from '../initial-db'

// HELPERS

const getDataFromStorage = async () => {
  const data = await AsyncStorage.getItem(DATABASE_KEY)
  return JSON.parse(data)
}

const saveDataToStorage = async (data) => {
  const parsed = JSON.stringify(data)
  await AsyncStorage.setItem(DATABASE_KEY, parsed)
}

// ACTIONS

export function loadDecks (data) {
  return async dispatch => {
    const data = await getDataFromStorage()
    if (!data) {
      await saveDataToStorage(initialDb)
      dispatch(decksLoaded(initialDb.decks))
    } else {
      dispatch(decksLoaded(data.decks))
    }
  }
}

export function createDeck (title) {
  return async dispatch => {
    const data = await getDataFromStorage()
    const name = slugify(title)
    const deck = {
      [name]: {
        name, title, questions: []
      }
    }
    await saveDataToStorage({
      ...data,
      decks: {
        ...data.decks,
        ...deck
      }
    })
    dispatch(deckCreated(deck))
  }
}

export function createQuestion (deck, question, answer) {
  return async dispatch => {
    const data = await getDataFromStorage()
    const newQuestion = { question, answer }
    await saveDataToStorage({
      ...data,
      decks: {
        ...data.decks,
        [deck]: {
          ...data.decks[deck],
          questions: [
            ...data.decks[deck].questions,
            newQuestion
          ]
        }
      }
    })
    dispatch(questionCreated({
      deck, question: newQuestion
    }))
  }
}
