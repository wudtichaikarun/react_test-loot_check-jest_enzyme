import {
  FETCH_BITCOID
} from '../../types'

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_BITCOID:
      return action.bitcoin
    default:
      return state
  }
}
