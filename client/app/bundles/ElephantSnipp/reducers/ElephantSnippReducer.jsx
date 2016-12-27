import { combineReducers } from 'redux'
import { HELLO_WORLD_NAME_UPDATE } from '../constants/elephantSnippConstants'
import {List, Map} from 'immutable';
import Immutable from 'immutable';

const initCB = Map({ input: 'input' })
const initsnipps = Immutable.fromJS([ {title: 'SnippA'}, {title: 'SnippB'} ])

const controlBar = (state = initCB, action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return initCB
    case 'CHANGE_CONTROL':
      return initCB
    case 'ADD_SNIPP':
      return initCB
    default:
      return state
  }
}
const snipps = (state = initsnipps, action) => {
  switch (action.type) {
    case 'ADD_SNIPP':
      state.puch({title: action.name})
    default:
      return state
  }
}
const elephantSnippReducer = combineReducers({ controlBar, snipps })
export default elephantSnippReducer
