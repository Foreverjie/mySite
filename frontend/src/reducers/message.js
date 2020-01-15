import { GET_ERRORS, GET_SUCCESS } from '../actions/types'

const initialState = {
  msg: {},
  success: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload,
        success: action.success
      }
    case GET_SUCCESS:
      return {
        msg: action.payload,
        success: action.success
      }
    default:
      return state
  }
}
