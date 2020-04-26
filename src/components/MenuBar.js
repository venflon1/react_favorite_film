import React,{Fragment} from 'react';

const menuBar = (props) => {

  return (
            <Fragment>
              <ul className="navbar-nav mr-auto">
                {props.children}
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </Fragment>
          );
}

export default menuBar;
