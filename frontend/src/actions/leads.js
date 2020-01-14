import axios from 'axios'

import {
  GET_LEADS,
  DELETE_LEAD,
  CREATE_LEAD,
  GET_ERRORS,
  GET_SUCCESS
} from './types'

// Get Leads
export const getLeads = () => dispatch => {
  axios
    .get('/api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

// Delete Lead
export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    })
    .catch(err => console.log(err))
}

// Create Lead
export const createLead = lead => dispatch => {
  axios
    .post(`/api/leads/`, lead)
    .then(res => {
      dispatch({
        type: CREATE_LEAD,
        payload: res.data
      })
      dispatch({
        type: GET_SUCCESS,
        payload: '创建成功.',
        success: true
      })
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors,
        success: false
      })
    })
}
