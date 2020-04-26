import React,{Fragment} from 'react';
import Movie from './Movie';
import MainTitleApp from './MainTitleApp';
import NoFound from './NoFound';

const mainTemplate = (props) => {

  return (
              <Fragment>
                <div className="container">
                  <MainTitleApp title="My favorite movies" />
                  {props.children}
                </div>
              </Fragment>
        );
}

export default mainTemplate;
