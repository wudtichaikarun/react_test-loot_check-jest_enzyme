import {
  setBalance,
  deposited,
  withdraw
} from './actions'

import{
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW
} from '../../types'

it('creats an action to set the balance', () => {
  const balance = 0

  const expectedAction = { type: SET_BALANCE, balance }

  expect(setBalance(balance)).toEqual(expectedAction)
})

it('creacts an action to deposit into the balance', () => {
  const deposit = 10
  const expectedAction = { type: DEPOSIT, deposit }

  expect(deposited(deposit)).toEqual(expectedAction)
})

it('creates an action to withdraw from the balance', () => {
  const withdrawal = 10
  const expectedAction = { type: WITHDRAW, withdrawal }

  expect(withdraw(withdrawal)).toEqual(expectedAction)
})