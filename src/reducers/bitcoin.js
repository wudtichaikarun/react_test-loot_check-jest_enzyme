import { FETCH_BITCOID } from '../actions/constants'

const bitcoin = (state = {}, action) => {
  switch(action.type) {
    case FETCH_BITCOID:
      return action.bitcoin
    default:
      return state
  }
}

export default bitcoin