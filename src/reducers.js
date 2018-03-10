import { combineReducers } from 'redux'
import  lootReducer from './features/loot/reducer'
import  walletReducer from './features/wallet/reducer'

export default combineReducers({
  bitcoin: lootReducer,
  balance: walletReducer
})