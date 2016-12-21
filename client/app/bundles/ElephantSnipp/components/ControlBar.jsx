import React from 'react'
import { connect } from 'react-redux'
import { changeControl} from '../actions/ElephantSnippActionCreators'

let ControlBar = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(changeControl(input.value))
        input.value = ''
      }}>
        <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
  ControlBar = connect()(ControlBar)

  export default ControlBar
