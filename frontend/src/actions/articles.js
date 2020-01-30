import axios from 'axios'

import { GET_ARTICLES, ADD_ARTICLE, GET_ARTICLE } from './types'
import { returnErrors } from './message'
import { tokenConfig } from './auth'

// Get Articles
export const getArticles = () => dispatch => {
  axios
    .get('/api/articles/')
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
    })
}

// New Article
export const addArticle = ({ title, description, article }) => (
  dispatch,
  getState
) => {
  const config = tokenConfig(getState)

  // Request Body
  const body = JSON.stringify({ title, description, article })

  axios
    .post('/api/articles/', body, config)
    .then(res => {
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
    })
}

// Get Article By Id
export const getArticle = id => dispatch => {
  axios
    .get(`/api/articles/${id}/`)
    .then(res => {
      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err))
    })
}
