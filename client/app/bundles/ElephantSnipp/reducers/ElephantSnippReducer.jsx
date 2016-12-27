import { combineReducers } from 'redux'
import { HELLO_WORLD_NAME_UPDATE } from '../constants/elephantSnippConstants'
import { List, Map } from 'immutable';

const initCB = Map({ input: 'input' })
const init = Map({ controlBar: initCB, snipps: '12' })

const name = (state = init, action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return init
    case 'CHANGE_CONTROL':
      return init
    case 'ADD_SNIPP':
      return init
    default:
      return state
  }
}
const elephantSnippReducer = combineReducers({ name })
export default elephantSnippReducer
