import axios from 'axios'
// import

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ERRORS
} from './types'
import { returnErrors } from './message'

// Check Token and Load User
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING })

  const config = tokenConfig(getState)

  axios
    .get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify({ username, password })

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

// Logout
export const logout = () => (dispatch, getState) => {
  const config = tokenConfig(getState)

  axios
    .post('/api/auth/logout', null, config)
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
    })
}

// Setup config with token
export const tokenConfig = getState => {
  // Get Token from state
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
}

// Register
export const register = ({
  username,
  email,
  password,
  password2
}) => dispatch => {
  // User Loading
  dispatch({ type: REGISTER_LOADING })
  // confirm password
  if (password !== password2) {
    dispatch({
      type: GET_ERRORS,
      payload: 'passwords do not match',
      success: false
    })
    return
  }
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify({ username, email, password })

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
        success: false
      })
      dispatch({
        type: REGISTER_FAIL
      })
    })
}
