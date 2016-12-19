import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/elephantSnippConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const elephantSnippReducer = combineReducers({ name });

export default elephantSnippReducer;
