import React from 'react'
import { connect } from "redux-zero/react";
import { multiplier } from "./actions"

const Multiplier = ({ multiplier }) => (
  <div className="text-only">
    <button onClick={multiplier}>Multiplier</button>
  </div>
)

const mapActions = store => ({
  multiplier
})

const connected = connect(null, mapActions)

export default connected(Multiplier)