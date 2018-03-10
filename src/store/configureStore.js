import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function() {
  const middlewares = [
    thunk
  ]

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  return store
}