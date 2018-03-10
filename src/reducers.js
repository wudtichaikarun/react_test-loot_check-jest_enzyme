import { combineReducers } from 'redux'
import { lootReducer } from './features/loot'
import { walletReducer } from './features/wallet'

export default combineReducers({
  bitcoin: lootReducer,
  balance: walletReducer
})