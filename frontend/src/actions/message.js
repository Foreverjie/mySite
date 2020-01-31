import { GET_ERRORS, GET_SUCCESS } from './types'

export const returnErrors = err => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data,
    success: false
  })
}

export const returnSuccess = msg => dispatch => {
  dispatch({
    type: GET_SUCCESS,
    payload: msg,
    success: true
  })
}
