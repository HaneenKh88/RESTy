import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render()
    {
    return (
      <header>
        <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
             </NavLink>
          </li>
          <li>
            <NavLink to="/history">
              History
             </NavLink>
          </li>
          <li>
            <NavLink to="/help">
              Help
             </NavLink>
          </li>
          
          </ul>
      </nav>
    </header>
     
    );
  };

}
export default Header;

