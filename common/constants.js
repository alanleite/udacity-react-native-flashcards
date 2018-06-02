import { createAction } from 'redux-actions'

export const decksLoaded = createAction('DECKS_LOADED')
export const deckCreated = createAction('DECK_CREATED')
export const questionCreated = createAction('QUESTION_CREATED')

export const DATABASE_KEY = 'STARWARS:DATABASE'
