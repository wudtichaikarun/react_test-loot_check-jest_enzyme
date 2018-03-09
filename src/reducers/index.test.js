import rootReducer from './index'

describe('rootReducer', () => {
  it('initializers the default state', () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {}})
  })
})