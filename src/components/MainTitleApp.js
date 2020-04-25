import React from 'react';
import Movie from './Movie';


const mainTitleApp = (props) => {

  return (
            <div className="row">
              <h1> { props.title } </h1>
            </div>
          );
}

export default mainTitleApp;
