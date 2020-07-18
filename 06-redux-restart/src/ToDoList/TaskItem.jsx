import React from 'react'
import { connect } from "redux-zero/react"
import actions from "./../actions";

const TaskItem = ({ item, removeTask }) => {
	const handleRemove = e => removeTask(item.id)
	return (
		<div className="task-item">
			<span
				style={{ marginRight: '20px', cursor: 'pointer' }}
				title="remove task"
				onClick={handleRemove}
			>
				x
	  </span>
			<span>{item.value}</span>
		</div>
	)
}

const connected = connect(null, actions)

export default connected(TaskItem)