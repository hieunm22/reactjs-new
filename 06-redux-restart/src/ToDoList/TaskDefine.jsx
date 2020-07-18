import React, { useState } from 'react'
import { connect } from "redux-zero/react"
import actions from "./../actions"

const TaskDefine = ({ createTask }) => {
  const [value, setValue] = useState('')
  const handlerChange = e => setValue(e.target.value)
  const submitTask = e => {
    if (value) {
      createTask(value)
      setValue('')
    }
  }
  const keyPress = e => {
    if (e.charCode !== 13 || !value) {
      return
    }
    createTask(value)
    setValue('')
  }

  return (
    <div className="task-define">
      <input
        type="text"
        placeholder="task description"
        value={value}
        onChange={handlerChange}
        onKeyPress={keyPress}
      />
      <button onClick={submitTask}>
        Create Task
      </button>
    </div>
  )
}

const connected = connect(null, actions)

export default connected(TaskDefine)