import { createStore } from 'redux';
import ElephantSnippReducer from '../reducers/ElephantSnippReducer.jsx';

const configureStore = (railsProps) => (
  createStore(ElephantSnippReducer, railsProps)
);

export default configureStore;
