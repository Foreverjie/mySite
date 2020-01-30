import { GET_ARTICLES, ADD_ARTICLE } from '../actions/types.js'

const initialState = {
  articles: [],
  author: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      }
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      }
    default:
      return state
  }
}
