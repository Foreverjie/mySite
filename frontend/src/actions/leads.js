import axios from 'axios'

import {
  GET_LEADS,
  DELETE_LEAD,
  CREATE_LEAD,
  GET_ERRORS,
  GET_SUCCESS
} from './types'
import { returnErrors } from './message'
import { tokenConfig } from './auth'

// Get Leads
export const getLeads = () => (dispatch, getState) => {
  const config = tokenConfig(getState)

  axios
    .get('/api/leads/', config)
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
    })
}

// Delete Lead
export const deleteLead = id => (dispatch, getState) => {
  const config = tokenConfig(getState)

  axios
    .delete(`/api/leads/${id}/`, config)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
      dispatch({
        type: GET_SUCCESS,
        payload: '删除成功',
        success: true
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
        success: false
      })
    })
}

// Create Lead
export const createLead = lead => (dispatch, getState) => {
  const config = tokenConfig(getState)

  axios
    .post(`/api/leads/`, lead, config)
    .then(res => {
      dispatch({
        type: CREATE_LEAD,
        payload: res.data
      })
      dispatch({
        type: GET_SUCCESS,
        payload: '创建成功',
        success: true
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
    })
}
