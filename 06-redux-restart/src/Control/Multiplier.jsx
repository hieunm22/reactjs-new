import React from 'react'
import { connect } from "redux-zero/react";
import actions from "./../actions"

const Multiplier = ({ multiply }) => (
  <div className="text-only">
    <button onClick={multiply}>Multiplier</button>
  </div>
)

const mapToProps = ({ multiply }) => ({ multiply });

const connected = connect(mapToProps, actions)

export default connected(Multiplier);