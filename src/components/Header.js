import React,{Fragment} from 'react';
import Movie from './Movie';


const header = (props) => {

  return (
              <Fragment>
                <header>
                  {props.children}
                </header>
              </Fragment>
        );
}

export default header;
