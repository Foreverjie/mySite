import { combineReducers } from 'redux'
import leads from './leads'
import message from './message'
import auth from './auth'
import articles from './articles'

export default combineReducers({
  leads: leads,
  message: message,
  auth: auth,
  articles: articles
})
