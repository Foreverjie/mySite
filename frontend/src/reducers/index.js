import { combineReducers } from 'redux'
import leads from './leads'
import message from './message'

export default combineReducers({
  leads: leads,
  message: message
})
