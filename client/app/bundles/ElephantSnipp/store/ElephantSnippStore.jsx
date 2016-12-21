import { createStore } from 'redux'
import ElephantSnippReducer from '../reducers/ElephantSnippReducer.jsx'

// Middleware to log the store state
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}
// middleware end

const configureStore = (railsProps) => (
  createStore(
    ElephantSnippReducer,
    railsProps
  )
);

export default configureStore;
