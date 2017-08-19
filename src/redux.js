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
export const game = (state = {}, { type, payload }) => {
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
  game,
})

// store.js
const INITIAL_STATE = {
  game: [
    // [ null, 1, null, 0 ],
    // [ null, null, 0, null ],
    // [ null, 0, null, null ],
    // [ 1, 1, null, 0 ],
    [ null, null, 1, null, 0, null, null, null, null, null, ],
    [ null, null, null, null, 0,  null, null, 1, null, 0, ],
    [ 0, null, null, 0, null, 0, null, 1, 1, null, ],
    [ null, 1, null, null, null, null, null, null, null, null, ],
    [ null, null, 1, null, null, null, null, null, 0, null, ],
    [ null, 0, null, null, null, null, null, null, null, 0, ],
    [ null, null, null, null, null, null, null, null, 0, null, ],
    [ null, null, null, 1, null, null, null, null, null, null, ],
    [ null, 0, null, null, null, null, null, null, 1, 1, ],
    [ null, null, 1, null, null, null, null, null, null, 1, ],
  ].map((row) => row.map((cell) => ({ value: cell, fixed: cell !== null })))
}

export function configureStore(initialState = INITIAL_STATE) {
  const store = createStore(
    reducers,
    initialState,
  )
  return store
}

export const store = configureStore()
