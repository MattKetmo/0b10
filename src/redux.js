import { combineReducers, createStore } from 'redux'

// actions.js
export const newGame = (game) => ({
  type: 'NEW_GAME',
  payload: game,
})

export const updateCell = (x, y, value) => ({
  type: 'UPDATE_CELL',
  payload: { x, y, value },
})

// reducers.js
export const currentGame = (state = [], { type, payload }) => {
  switch (type) {
    case 'NEW_GAME':
      return payload
    case 'UPDATE_CELL':
      const newState = state.slice(0)
      newState[payload.x][payload.y].value = payload.value
      return newState
    default:
      return state
  }
}

export const reducers = combineReducers({
  currentGame,
})

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
  )
  return store
}

export const store = configureStore()