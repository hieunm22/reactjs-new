import React from "react";
import { connect } from "redux-zero/react";
import actions from "./actions";

const Counter = ({ count, increment }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <button onClick={increment}>increment</button>
    </div>
  </div>
)

const mapToProps = ({ count }) => ({ count });

const connected = connect(mapToProps, actions)

export default connected(Counter);