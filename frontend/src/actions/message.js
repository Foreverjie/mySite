import { GET_ERRORS, GET_SUCCESS } from './types'

export const returnErrors = err => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data,
    success: false
  })
}
