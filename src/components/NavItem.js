import React,{Fragment} from 'react';

const navItem = (props) => {

  return (
            <Fragment>
              <li class="nav-item active">
                <a class="nav-link" href="#">{props.name}<span class="sr-only">(current)</span></a>
              </li>
            </Fragment>
          );
}

export default navItem;
