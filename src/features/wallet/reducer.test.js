import balanceReducer from './reducer'
import balanceReducer2 from './reducer'
import {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW
} from '../../types'

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10

    it('sets a balance', () => {
  
      // balanceRducer param_1=prevState param_2=objData
      expect(balanceReducer(undefined, { type: SET_BALANCE, balance }))
        .toEqual(balance)
    })
  
    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    })
  })
  
  it('deposits into the balance', () => {
    const deposit = 10
    const initialState = 5

    expect(balanceReducer(initialState, { type: DEPOSIT, deposit }))
      .toEqual(initialState + deposit)
  })

  it('withdraws from the balance', () => {
    const withdrawal = 10
    const initialState = 20

    expect(balanceReducer(initialState, { type: WITHDRAW, withdrawal}))
      .toEqual(initialState - withdrawal)
  })
})