import { handleActions } from 'redux-actions'
import {
  decksLoaded,
  deckCreated,
  questionCreated
} from '../constants'

const defaultState = { decks: {} }

export default handleActions({
  [decksLoaded]: (state, { payload }) => {
    return {
      ...state,
      decks: payload
    }
  },
  [deckCreated]: (state, { payload }) => {
    return {
      ...state,
      decks: {
        ...state.decks,
        ...payload
      }
    }
  },
  [questionCreated]: (state, { payload }) => {
    return {
      ...state,
      decks: {
        ...state.decks,
        [payload.deck]: {
          ...state.decks[payload.deck],
          questions: [
            ...state.decks[payload.deck].questions,
            payload.question
          ]
        }
      }
    }
  }
}, defaultState)
