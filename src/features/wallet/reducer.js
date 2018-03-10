import {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW
} from '../../types'
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE'

export default (state = 0, action) => {
  let balance

  switch(action.type) {
    case SET_BALANCE:
      balance = action.balance
      break
    case DEPOSIT:
      balance = state + action.deposit
      break
    case WITHDRAW: 
      balance = state - action.withdrawal
      break
  
    default:
      // 10 mean int number base 10
      return parseInt(read_cookie(BALANCE_COOKIE), 10) || state
  }
  // set cookie
  bake_cookie(BALANCE_COOKIE, balance)
  return balance
}
