import React from 'react'
import { connect } from 'react-redux'
import { changeControl} from '../actions/ElephantSnippActionCreators'
import { addSnipp} from '../actions/ElephantSnippActionCreators'

let ControlBar = ({ dispatch }) => {
  let input
  const onChange = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(changeControl(input.value))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addSnipp('chat'))
  }

  return (
    <div>
      <form
        onChange={e => { onChange(e) }}
        onSubmit={e => { onSubmit(e) }}
      >
        <input  autoFocus ='true' ref={node => {
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
