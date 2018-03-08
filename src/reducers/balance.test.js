import balanceReducer from './balance'
import * as constants from '../actions/constants'

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10

    // balanceRducer param_1=prevState param_2=objData
    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance)
  })
})