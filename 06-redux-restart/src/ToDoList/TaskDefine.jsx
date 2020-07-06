import React, { useState } from 'react'
import { connect } from "redux-zero/react";
import actions from "./actions";

const TaskDefine = ({ createTask }) => {
  const [value, setValue] = useState('')
  const handlerChange = e => setValue(e.target.value)
  const submitTask = e => createTask(value)

  return (
    <div className="task-define">
      <input
        type="text"
        placeholder="task description"
        value={value}
        onChange={handlerChange}
      />
      <button
        onClick={submitTask}
      >
        Create Task
      </button>
    </div>
  )
}


const connected = connect(null, actions)

export default connected(TaskDefine);