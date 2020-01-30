import { GET_ARTICLES, ADD_ARTICLE, GET_ARTICLE } from '../actions/types.js'

const initialState = {
  articles: [],
  articleDetail: null
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
    case GET_ARTICLE:
      return {
        ...state,
        articleDetail: action.payload
      }
    default:
      return state
  }
}
