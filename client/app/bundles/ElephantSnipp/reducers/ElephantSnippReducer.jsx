import { combineReducers } from 'redux'
import { HELLO_WORLD_NAME_UPDATE } from '../constants/elephantSnippConstants'

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      console.log(action)
      return action.text
    case 'CHANGE_CONTROL':
      console.log(action)
      return action.text
    default:
      return state
  }
}

const elephantSnippReducer = combineReducers({ name });

export default elephantSnippReducer;
