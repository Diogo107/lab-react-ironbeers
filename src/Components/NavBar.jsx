import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav>
      <Link to="/">
        <div>
          <img src="/images/casa.png" height="40vh" />
        </div>
      </Link>
    </nav>
  );
};

export default withRouter(NavBar);
