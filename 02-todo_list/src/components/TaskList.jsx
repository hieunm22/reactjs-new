import React from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends React.Component {
  render() {
    const { items } = this.props
    return (
      <div className="task-list">
        {items.map((item, idx) => (
          <TaskItem
            item={item}
            key={idx}
            onCheck={ this.props.onCheckChanged(idx) }
            onDelete={ this.props.onDelete(idx) }
          />
        ))}
      </div>
    )
  }
}