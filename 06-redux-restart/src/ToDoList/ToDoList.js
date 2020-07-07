import React from 'react';
import { connect } from "redux-zero/react";
import actions from "./../actions";
import TaskList from './TaskList';
import TaskDefine from './TaskDefine';

const ToDoList = ({ items, createTask }) => {
  return (
    <div className="container">
      <TaskList
        items={items}
      />
      <TaskDefine />
    </div>
  )
}

const mapToProps = ({ items, createTask }) => ({ items, createTask });

const connected = connect(mapToProps, actions)

export default connected(ToDoList);