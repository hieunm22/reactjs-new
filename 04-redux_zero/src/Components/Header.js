import React from 'react'
import pig from '../assets/pig.png'

const Header = () => (
  <div className="app-header">
    <span className="app-header--heading">
      <b>
        TODO Redux!
      </b>
    </span>
    <span className="app-header--logo">
      <img
        src={pig}
        alt="dog-logo"
        width="60"
        height="40"
      />
    </span>
  </div>
)

export default Header