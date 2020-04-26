import React from 'react';
import SearchBar from './SearchBar';


const navBar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {props.children}
      </div>
    </nav>
          );
}

export default navBar;
