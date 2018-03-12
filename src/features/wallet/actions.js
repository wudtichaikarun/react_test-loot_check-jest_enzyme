import {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW
} from '../../types'

export const setBalance = balance => {
  return {
    type: SET_BALANCE,
    balance
  }
}

export const deposited = deposit => {
  return {
    type: DEPOSIT,
    deposit
  }
}

export const withdraw = withdrawal => {
  return {
    type: WITHDRAW,
    withdrawal
  }
}