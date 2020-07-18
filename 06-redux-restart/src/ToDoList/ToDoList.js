import React from 'react';
import { connect } from "redux-zero/react";
import actions from "./../actions";
import TaskList from './TaskList';
import TaskDefine from './TaskDefine';

const ToDoList = () => {
  return (
    <div className="container">
      <TaskList />
      <TaskDefine />
    </div>
  )
}

const connected = connect(null, actions)

export default connected(ToDoList);