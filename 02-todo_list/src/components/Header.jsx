import React from 'react'
import dog from '../assets/dog.png'

const Header = () => (
  <div className="app-header">
    <span className="app-header--heading">
      <b>
        React Todo List
      </b>
    </span>
    <span className="app-header--logo">
      <img src={dog} alt="dog-logo" width="24" height="24" />
    </span>
  </div>
)

export default Header