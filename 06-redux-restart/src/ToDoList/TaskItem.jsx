import React from 'react'

const TaskItem = ({ item }) => {
  return (
    <div className="task-item">
      {item.value}
    </div>
  )
}

export default TaskItem