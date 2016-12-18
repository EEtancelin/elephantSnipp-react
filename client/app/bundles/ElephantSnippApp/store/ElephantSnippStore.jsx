import { createStore } from 'redux';
import helloWorldReducer from '../reducers/ElephantSnippReducer';

const configureStore = (railsProps) => (
  createStore(ElephantSnippReducer, railsProps)
);

export default configureStore;
