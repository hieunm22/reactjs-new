import React from 'react';
import './App.css';

import { Link } from "react-router-dom";

const Home = () => (
  <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/control">Control</Link>
        </li>
      </ul>
  </div>
);

export default Home