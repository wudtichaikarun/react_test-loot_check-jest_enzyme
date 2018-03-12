import bitcoinReducer from './reducer'
import { FETCH_BITCOID } from '../../types'

describe('bitcoinReducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' }

  it('fetches and sets the bitcoin data', () => {
   expect(bitcoinReducer({}, { type: FETCH_BITCOID, bitcoin: bitcoinData } ))
    .toEqual(bitcoinData)
  })
})