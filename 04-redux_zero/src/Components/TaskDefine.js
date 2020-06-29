import React from 'react'
import ColorPicker from './ColorPicker'
import actions from "../actions"
import store from "../provider"
import { connect } from "redux-zero/react";
// NOTE: why need React?

let textInput = null

const mapToProps = ({ define }) => ({ define })

// const onTextChanged = e => {
//   store.setState({ ...newDefine })
// }

const onColorPicked = e => {
  debugger
  // store.setState({ define: { ...content: e.target.value } })
}

const TaskDefine = ({ define, textChanged }) => {
  return (
    <div className="task-define">
      <input
        className="task-define--content"
        type="text"
        placeholder="Add new item..."
        onChange={textChanged}
        value={define.content}
        autoFocus={true}
        ref={el => textInput = el}
      />
      <div className="task-define--control">
        <ColorPicker 
          selectedColor={define.color}
          onPick={onColorPicked}
        />
        <button
          className="task-define--button"
          // onClick={onCreateTask}
        >
          Add
        </button>
      </div>
    </div>
  )
}

const ConnectedTaskDefine = connect(
  mapToProps,
  actions
)(TaskDefine)

export default ConnectedTaskDefine
