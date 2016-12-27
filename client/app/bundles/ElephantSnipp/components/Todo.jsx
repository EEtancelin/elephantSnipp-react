import React from 'react'
import { connect } from 'react-redux'
import { changeControl} from '../actions/ElephantSnippActionCreators'
import { updateName} from '../actions/ElephantSnippActionCreators'



let Todo = ({name, onChange}) => {
  return (
    <div>
      <h3>
        Hello, {name}!
      </h3>
      <hr />
      <form >
        <label htmlFor="name">
          Say hello to:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => this.updateName(e.target.value)}
        />
      </form>
    </div>
    )
  }

  Todo = connect()(Todo)
  export default Todo
