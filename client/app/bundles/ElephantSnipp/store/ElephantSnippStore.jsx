import { createStore } from 'redux'
import ElephantSnippReducer from '../reducers/ElephantSnippReducer.jsx'

const configureStore = (railsProps) => (
  createStore(
    ElephantSnippReducer,
    railsProps,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default configureStore;
