import React,{Fragment} from 'react';
import SearchBar from './SearchBar';


const dropDownItem = (props) => {


  return (
            <Fragment>
              <a className="dropdown-item" href="#">{props.titleItem}</a>
            </Fragment>
          );
}

export default dropDownItem;
